import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CarService } from '../../services/car.service';
import { AuthService } from '../../services/auth.service';
import { ReservationService } from '../../services/reservation.service';
import { NotificationComponent } from '../../components/notification/notification.component';

import { Car } from '../../models/car.model';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [ReactiveFormsModule, NotificationComponent],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  car?: Car;
  form!: any;

  showNotification = false;
  notificationTitle = '';
  notificationMessage = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService,
    private authService: AuthService,
    private reservationService: ReservationService,
    private cdr: ChangeDetectorRef
  ) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCarById(id).subscribe(car => {
      this.car = car;
      this.cdr.detectChanges();
    });

    this.form = this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required]
    });
  }

openNotification(title: string, message: string): void {
  this.notificationTitle = title;
  this.notificationMessage = message;
  this.showNotification = true;
  this.cdr.detectChanges();
}

  total(): number {
    return this.getDays() * (this.car?.pricePerDay || 0);
  }

  getDays(): number {
    const start = new Date(this.form.value.start || '');
    const end = new Date(this.form.value.end || '');
    return Math.ceil((+end - +start) / (1000 * 60 * 60 * 24));
  }

  confirm(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.openNotification('Formulaire incomplet', 'Veuillez remplir les deux dates.');
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const start = new Date(this.form.value.start || '');
    const end = new Date(this.form.value.end || '');

    if (start < today) {
      this.openNotification('Date invalide', 'La date de départ ne peut pas être dans le passé.');
      return;
    }

    if (end <= start) {
      this.openNotification('Date invalide', 'La date de retour doit être supérieure à la date de départ.');
      return;
    }

    if (!this.car) return;

    const reservation = {
      car: this.car,
      startDate: this.form.value.start || '',
      endDate: this.form.value.end || '',
      days: this.getDays(),
      totalPrice: this.total()
    };

    const customerId = this.authService.getUser()?.id || 1;

    this.reservationService.createReservation(reservation, customerId).subscribe({
      next: () => {
        this.router.navigate(['/reservation-summary']);
      },
      error: () => {
        this.openNotification(
          'Reservation impossible',
          'Cette voiture est deja reservee pour cette periode. Choisissez une autre date.'
        );
      }
    });
  }
}
