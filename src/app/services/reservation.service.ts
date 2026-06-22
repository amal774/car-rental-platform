import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservation?: Reservation;

  setReservation(reservation: Reservation): void {
    this.reservation = reservation;
  }

  getReservation(): Reservation | undefined {
    return this.reservation;
  }
}