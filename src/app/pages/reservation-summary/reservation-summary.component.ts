import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservation-summary',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reservation-summary.component.html',
  styleUrl: './reservation-summary.component.css'
})
export class ReservationSummaryComponent {
  reservation?: Reservation;

  constructor(private reservationService: ReservationService) {
    this.reservation = this.reservationService.getReservation();
  }
}