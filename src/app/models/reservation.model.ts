import { Car } from './car.model';

export interface Reservation {
  car: Car;
  startDate: string;
  endDate: string;
  totalPrice: number;
  days: number;
}