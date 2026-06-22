import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable({ providedIn: 'root' })
export class CarService {
  private storageKey = 'rentcar_cars';

  private defaultCars: Car[] = [
    { id: 1, brand: 'Toyota', model: 'Corolla Hybrid', pricePerDay: 120, available: true, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200', gallery: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200','https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200'], transmission: 'Automatique', fuel: 'Hybride', seats: 5, description: 'Berline économique, confortable et idéale pour les longs trajets.' },
    { id: 2, brand: 'BMW', model: 'Série 3', pricePerDay: 220, available: true, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200', gallery: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200'], transmission: 'Automatique', fuel: 'Essence', seats: 5, description: 'Voiture premium avec design sportif et excellente tenue de route.' },
    { id: 3, brand: 'Mercedes', model: 'Classe A', pricePerDay: 240, available: false, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200', gallery: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200'], transmission: 'Automatique', fuel: 'Diesel', seats: 5, description: 'Compacte luxueuse, parfaite pour la ville et les voyages.' },
    { id: 4, brand: 'Hyundai', model: 'Tucson', pricePerDay: 180, available: true, image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200', gallery: ['https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200'], transmission: 'Automatique', fuel: 'Hybride', seats: 5, description: 'SUV moderne, spacieux et confortable.' }
  ];

  private cars: Car[] = this.loadCars();

  getCars(): Car[] {
    return this.cars;
  }

  getCarById(id: number): Car | undefined {
    return this.cars.find(car => car.id === id);
  }

  addCar(car: Omit<Car, 'id'>): Car {
    const newCar: Car = {
      ...car,
      id: Date.now(),
      gallery: car.gallery?.length ? car.gallery : [car.image]
    };
    this.cars = [newCar, ...this.cars];
    this.saveCars();
    return newCar;
  }

  updateCar(id: number, updatedCar: Omit<Car, 'id'>): void {
    this.cars = this.cars.map(car =>
      car.id === id ? { ...updatedCar, id, gallery: updatedCar.gallery?.length ? updatedCar.gallery : [updatedCar.image] } : car
    );
    this.saveCars();
  }

  deleteCar(id: number): void {
    this.cars = this.cars.filter(car => car.id !== id);
    this.saveCars();
  }

  toggleAvailability(id: number): void {
    this.cars = this.cars.map(car =>
      car.id === id ? { ...car, available: !car.available } : car
    );
    this.saveCars();
  }

  private loadCars(): Car[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) as Car[] : this.defaultCars;
  }

  private saveCars(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cars));
  }
}
