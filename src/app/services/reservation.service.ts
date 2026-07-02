import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { API_BASE_URL } from '../config/api.config';
import { Reservation } from '../models/reservation.model';

interface ApiRental {
  id?: number;
  carId: number;
  customerId: number;
  startDate: string;
  endDate: string;
  totalPrice?: number;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private readonly apiUrl = `${API_BASE_URL}/rentals`;
  private reservation?: Reservation;

  constructor(private http: HttpClient) {}

  setReservation(reservation: Reservation): void {
    this.reservation = reservation;
  }

  createReservation(reservation: Reservation, customerId: number): Observable<ApiRental> {
    const payload: ApiRental = {
      carId: reservation.car.id,
      customerId,
      startDate: reservation.startDate,
      endDate: reservation.endDate
    };

    return this.http.post<ApiRental>(this.apiUrl, payload).pipe(
      tap(created => {
        this.reservation = {
          ...reservation,
          totalPrice: created.totalPrice ?? reservation.totalPrice
        };
      })
    );
  }

  getReservation(): Reservation | undefined {
    return this.reservation;
  }
}
