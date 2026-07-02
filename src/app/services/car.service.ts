import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { API_BASE_URL } from '../config/api.config';
import { Car } from '../models/car.model';

interface ApiCar {
  id?: number;
  brand: string;
  model: string;
  pricePerDay: number;
  available?: boolean;
  seats: number;
  transmission: string;
  fuelType: string;
  imageUrl: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class CarService {
  private readonly apiUrl = `${API_BASE_URL}/cars`;
  private readonly storageKey = 'rentcar_cars_cache';

  private defaultCars: Car[] = [
    { id: 1, brand: 'Toyota', model: 'Corolla Hybrid', pricePerDay: 120, available: true, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200', gallery: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200', 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200'], transmission: 'Automatique', fuel: 'Hybride', seats: 5, description: 'Berline economique, confortable et ideale pour les longs trajets.' },
    { id: 2, brand: 'BMW', model: 'Serie 3', pricePerDay: 220, available: true, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200', gallery: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200'], transmission: 'Automatique', fuel: 'Essence', seats: 5, description: 'Voiture premium avec design sportif et excellente tenue de route.' },
    { id: 3, brand: 'Mercedes', model: 'Classe A', pricePerDay: 240, available: false, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200', gallery: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200'], transmission: 'Automatique', fuel: 'Diesel', seats: 5, description: 'Compacte luxueuse, parfaite pour la ville et les voyages.' },
    { id: 4, brand: 'Hyundai', model: 'Tucson', pricePerDay: 180, available: true, image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200', gallery: ['https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200'], transmission: 'Automatique', fuel: 'Hybride', seats: 5, description: 'SUV moderne, spacieux et confortable.' }
  ];

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<ApiCar[]>(this.apiUrl).pipe(
      map(cars => cars.map(car => this.fromApiCar(car))),
      tap(cars => this.saveCache(cars)),
      catchError(() => of(this.loadCache()))
    );
  }

  getCarById(id: number): Observable<Car | undefined> {
    return this.http.get<ApiCar>(`${this.apiUrl}/${id}`).pipe(
      map(car => this.fromApiCar(car)),
      catchError(() => this.getCars().pipe(
        map(cars => cars.find(car => car.id === id))
      ))
    );
  }

  addCar(car: Omit<Car, 'id'>): Observable<Car> {
    return this.http.post<ApiCar>(this.apiUrl, this.toApiCar(car)).pipe(
      map(created => this.fromApiCar(created))
    );
  }

  updateCar(id: number, updatedCar: Omit<Car, 'id'>): Observable<Car> {
    return this.http.put<ApiCar>(`${this.apiUrl}/${id}`, this.toApiCar(updatedCar, id)).pipe(
      map(car => this.fromApiCar(car))
    );
  }

  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleAvailability(id: number): Observable<Car | undefined> {
    return this.getCarById(id).pipe(
      map(car => car ? { ...car, available: !car.available } : undefined),
      tap(car => {
        if (!car) return;
        this.updateCar(car.id, car).subscribe();
      })
    );
  }

  private fromApiCar(car: ApiCar): Car {
    const image = car.imageUrl || 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200';

    return {
      id: car.id ?? Date.now(),
      brand: car.brand,
      model: car.model,
      pricePerDay: car.pricePerDay,
      available: car.available ?? true,
      image,
      gallery: [image],
      transmission: car.transmission,
      fuel: car.fuelType,
      seats: car.seats,
      description: car.description
    };
  }

  private toApiCar(car: Omit<Car, 'id'>, id?: number): ApiCar {
    return {
      id,
      brand: car.brand,
      model: car.model,
      pricePerDay: Number(car.pricePerDay),
      available: car.available,
      seats: Number(car.seats),
      transmission: car.transmission,
      fuelType: car.fuel,
      imageUrl: car.image,
      description: car.description
    };
  }

  private loadCache(): Car[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) as Car[] : this.defaultCars;
  }

  private saveCache(cars: Car[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cars));
  }
}
