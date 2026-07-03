import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';

interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent implements OnInit {
  isOpen = false;
  isLoading = false;
  userMessage = '';
  cars: Car[] = [];
  messages: ChatMessage[] = [
    {
      from: 'bot',
      text: 'Bonjour, je suis votre assistant location. Je peux compter les voitures disponibles, comparer les caracteristiques et proposer le bon choix.'
    }
  ];

  quickQuestions = [
    'Combien de voitures disponibles ?',
    'Quelle voiture choisir ?',
    'Voiture la moins chere',
    'Voiture familiale',
    'Automatique moins de 200 DT',
    'Compare les voitures'
  ];

  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCars();
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.cars.length === 0) {
      this.loadCars();
    }
  }

  askQuick(question: string): void {
    this.userMessage = question;
    this.sendMessage();
  }

  sendMessage(): void {
    const question = this.userMessage.trim();
    if (!question) return;

    this.messages.push({ from: 'user', text: question });
    this.userMessage = '';

    if (this.cars.length > 0) {
      this.messages.push({ from: 'bot', text: this.buildAnswer(question) });
      this.refreshCarsSilently();
      return;
    }

    this.isLoading = true;
    this.carService.getCars().subscribe({
      next: cars => {
        this.cars = cars;
        this.isLoading = false;
        this.messages.push({ from: 'bot', text: this.buildAnswer(question) });
      },
      error: () => {
        this.isLoading = false;
        this.messages.push({
          from: 'bot',
          text: 'Je ne peux pas charger les voitures maintenant. Verifiez que car-service et api-gateway sont demarres.'
        });
      }
    });
  }

  goToCars(): void {
    this.isOpen = false;
    this.router.navigate(['/cars']);
  }

  private loadCars(): void {
    this.isLoading = true;
    this.carService.getCars().subscribe({
      next: cars => {
        this.cars = cars;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.messages.push({
          from: 'bot',
          text: 'Je ne peux pas charger les voitures maintenant. Verifiez que le backend est demarre.'
        });
      }
    });
  }

  private refreshCarsSilently(): void {
    this.carService.getCars().subscribe({
      next: cars => {
        this.cars = cars;
      }
    });
  }

  private buildAnswer(question: string): string {
    const normalized = this.normalize(question);
    const availableCars = this.cars.filter(car => car.available);

    if (this.cars.length === 0) {
      return 'Je charge encore les voitures. Si rien ne s affiche, verifiez que car-service et api-gateway sont demarres.';
    }

    const carMatch = this.findCarMatch(normalized, this.cars);
    if (carMatch) {
      return this.describeCarWithAlternatives(carMatch, availableCars);
    }

    if (this.hasAny(normalized, ['compare', 'comparaison', 'difference'])) {
      return this.compareCars(availableCars);
    }

    if (this.hasAny(normalized, ['liste', 'affiche', 'montre', 'toutes', 'tous'])) {
      return this.listCars(availableCars);
    }

    if (this.hasAny(normalized, ['combien', 'nombre', 'dispo', 'disponible'])) {
      return this.availableCarsAnswer(availableCars);
    }

    if (this.hasAny(normalized, ['moins chere', 'moins cher', 'prix', 'economique', 'budget', 'pas cher'])) {
      return this.recommendForNeeds(availableCars, normalized);
    }

    if (this.hasAny(normalized, ['famille', 'familiale', 'places', 'spacieuse', 'suv'])) {
      return this.recommendForNeeds(availableCars, normalized);
    }

    if (this.hasAny(normalized, ['automatique', 'manuel', 'transmission'])) {
      return this.recommendForNeeds(availableCars, normalized);
    }

    if (this.hasAny(normalized, ['essence', 'diesel', 'hybride', 'carburant', 'fuel'])) {
      return this.recommendForNeeds(availableCars, normalized);
    }

    if (this.hasAny(normalized, ['choisir', 'conseille', 'meilleur', 'bonne voiture', 'bon choix', 'besoin'])) {
      return this.recommendForNeeds(availableCars, normalized);
    }

    if (this.hasAny(normalized, ['reservation', 'reserver', 'louer'])) {
      return 'Pour reserver, ouvrez une voiture, cliquez sur Voir details, puis choisissez les dates. Si la meme voiture est deja reservee dans la meme periode, la reservation sera refusee.';
    }

    if (this.hasAny(normalized, ['bonjour', 'salut', 'hello', 'hi'])) {
      return 'Bonjour. Dites-moi votre besoin: budget, automatique/manuel, carburant, nombre de places ou marque. Exemple: "je veux une automatique moins de 200 DT".';
    }

    return this.recommendForNeeds(availableCars, normalized);
  }

  private availableCarsAnswer(availableCars: Car[]): string {
    if (availableCars.length === 0) {
      return 'Aucune voiture disponible pour le moment.';
    }

    const list = availableCars
      .slice(0, 4)
      .map(car => `${car.brand} ${car.model} (${car.pricePerDay} DT/jour, ${car.seats} places, ${car.transmission}, ${car.fuel})`)
      .join(' | ');

    return `Il y a ${availableCars.length} voiture(s) disponible(s). Exemples: ${list}.`;
  }

  private recommendForNeeds(availableCars: Car[], question: string): string {
    const filtered = this.filterByQuestion(availableCars, question);
    const pool = filtered.length > 0 ? filtered : availableCars;
    const budget = this.extractBudget(question);
    const wantsFamily = this.hasAny(question, ['famille', 'familiale', 'places', 'spacieuse', 'suv']);
    const wantsCheap = this.hasAny(question, ['moins chere', 'moins cher', 'economique', 'budget', 'pas cher']);

    const car = [...pool].sort((a, b) => {
      const familyBonusA = wantsFamily ? a.seats * 20 : 0;
      const familyBonusB = wantsFamily ? b.seats * 20 : 0;
      const budgetPenaltyA = budget && a.pricePerDay > budget ? 1000 : 0;
      const budgetPenaltyB = budget && b.pricePerDay > budget ? 1000 : 0;
      const cheapScoreA = wantsCheap ? a.pricePerDay : a.pricePerDay / Math.max(a.seats, 1);
      const cheapScoreB = wantsCheap ? b.pricePerDay : b.pricePerDay / Math.max(b.seats, 1);
      return (cheapScoreA + budgetPenaltyA - familyBonusA) - (cheapScoreB + budgetPenaltyB - familyBonusB);
    })[0];

    if (!car) return 'Je ne peux pas proposer de voiture car aucune voiture disponible n est trouvee.';

    const reason = this.buildReason(car, question, filtered.length, budget);
    const alternatives = this.sortByPrice(pool)
      .filter(item => item.id !== car.id)
      .slice(0, 2)
      .map(item => `${item.brand} ${item.model} (${item.pricePerDay} DT/jour)`)
      .join(', ');

    return alternatives
      ? `Je conseille ${car.brand} ${car.model}: ${car.pricePerDay} DT/jour, ${car.seats} places, ${car.transmission}, ${car.fuel}. ${reason} Alternatives: ${alternatives}.`
      : `Je conseille ${car.brand} ${car.model}: ${car.pricePerDay} DT/jour, ${car.seats} places, ${car.transmission}, ${car.fuel}. ${reason}`;
  }

  private sortByPrice(cars: Car[]): Car[] {
    return [...cars].sort((a, b) => a.pricePerDay - b.pricePerDay);
  }

  private hasAny(text: string, words: string[]): boolean {
    return words.some(word => text.includes(word));
  }

  private filterByQuestion(cars: Car[], question: string): Car[] {
    let result = [...cars];
    const budget = this.extractBudget(question);
    const seats = this.extractSeats(question);
    const transmission = this.findValue(question, ['automatique', 'manuel']);
    const fuel = this.findValue(question, ['essence', 'diesel', 'hybride']);
    const brand = this.findNameMatch(question, cars.map(car => car.brand));
    const model = this.findNameMatch(question, cars.map(car => car.model));

    if (budget) result = result.filter(car => car.pricePerDay <= budget);
    if (seats) result = result.filter(car => car.seats >= seats);
    if (transmission) result = result.filter(car => this.normalize(car.transmission).includes(transmission));
    if (fuel) result = result.filter(car => this.normalize(car.fuel).includes(fuel));
    if (brand) result = result.filter(car => this.normalize(car.brand).includes(brand));
    if (model) result = result.filter(car => this.normalize(car.model).includes(model));

    return result;
  }

  private listCars(cars: Car[]): string {
    if (cars.length === 0) return 'Aucune voiture disponible pour le moment.';

    return cars
      .map(car => `${car.brand} ${car.model}: ${car.pricePerDay} DT/jour, ${car.seats} places, ${car.transmission}, ${car.fuel}`)
      .join(' | ');
  }

  private compareCars(cars: Car[]): string {
    if (cars.length === 0) return 'Aucune voiture disponible pour comparer.';

    const cheapest = this.sortByPrice(cars)[0];
    const family = [...cars].sort((a, b) => b.seats - a.seats || a.pricePerDay - b.pricePerDay)[0];
    const premium = [...cars].sort((a, b) => b.pricePerDay - a.pricePerDay)[0];

    return `Comparaison: economique ${cheapest.brand} ${cheapest.model} (${cheapest.pricePerDay} DT/jour), familiale ${family.brand} ${family.model} (${family.seats} places), premium ${premium.brand} ${premium.model} (${premium.pricePerDay} DT/jour).`;
  }

  private describeCar(car: Car): string {
    const status = car.available ? 'disponible' : 'non disponible';
    return `${car.brand} ${car.model} est ${status}: ${car.pricePerDay} DT/jour, ${car.seats} places, ${car.transmission}, ${car.fuel}. ${car.description}`;
  }

  private describeCarWithAlternatives(car: Car, availableCars: Car[]): string {
    if (car.available) {
      return this.describeCar(car);
    }

    const alternatives = this.sortByPrice(availableCars)
      .slice(0, 3)
      .map(item => `${item.brand} ${item.model} (${item.pricePerDay} DT/jour, ${item.transmission}, ${item.fuel})`)
      .join(' | ');

    return alternatives
      ? `${this.describeCar(car)} Elle n est pas disponible maintenant. Voitures disponibles a la place: ${alternatives}.`
      : `${this.describeCar(car)} Elle n est pas disponible maintenant et je ne trouve aucune autre voiture disponible.`;
  }

  private buildReason(car: Car, question: string, matchedCount: number, budget: number | null): string {
    const reasons: string[] = [];

    if (budget) {
      reasons.push(car.pricePerDay <= budget ? `elle respecte votre budget de ${budget} DT` : `elle depasse le budget, mais c est le meilleur choix disponible`);
    }
    if (this.hasAny(question, ['famille', 'familiale', 'places', 'spacieuse', 'suv'])) {
      reasons.push(`elle est adaptee avec ${car.seats} places`);
    }
    if (this.hasAny(question, ['automatique', 'manuel'])) {
      reasons.push(`elle correspond a la transmission demandee`);
    }
    if (this.hasAny(question, ['essence', 'diesel', 'hybride'])) {
      reasons.push(`elle correspond au carburant demande`);
    }
    if (matchedCount === 0) {
      reasons.push('je n ai pas trouve une correspondance parfaite, donc je propose le meilleur rapport prix/caracteristiques');
    }

    return reasons.length > 0
      ? `Pourquoi: ${reasons.join(', ')}.`
      : 'Pourquoi: bon rapport prix/caracteristiques.';
  }

  private extractBudget(question: string): number | null {
    const match = question.match(/(?:moins de|budget|maximum|max|<=?)\s*(\d+)/) ?? question.match(/(\d+)\s*(?:dt|tnd)/);
    return match ? Number(match[1]) : null;
  }

  private extractSeats(question: string): number | null {
    const match = question.match(/(\d+)\s*(?:places|personnes|sieges)/);
    return match ? Number(match[1]) : null;
  }

  private findValue(question: string, values: string[]): string | null {
    return values.find(value => question.includes(value)) ?? null;
  }

  private findCarMatch(question: string, cars: Car[]): Car | null {
    const exact = cars.find(car => {
      const brand = this.normalize(car.brand);
      const model = this.normalize(car.model);
      const fullName = this.normalize(`${car.brand} ${car.model}`);
      return question.includes(fullName) || question.includes(model) || question.includes(brand);
    });

    return exact ?? null;
  }

  private findNameMatch(question: string, values: string[]): string | null {
    const names = [...new Set(values.map(value => this.normalize(value)))];
    return names.find(name => question.includes(name)) ?? null;
  }

  private normalize(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[?!.:,;]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
}
