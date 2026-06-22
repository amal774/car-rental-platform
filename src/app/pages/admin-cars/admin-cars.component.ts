import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-admin-cars',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-cars.component.html',
  styleUrl: './admin-cars.component.css'
})
export class AdminCarsComponent {
  cars: Car[] = [];
  editingCarId: number | null = null;
  submitted = false;
  form;

  constructor(private fb: FormBuilder, private carService: CarService) {
    this.cars = this.carService.getCars();
    this.form = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      pricePerDay: [0, [Validators.required, Validators.min(1)]],
      available: [true],
      image: ['', Validators.required],
      transmission: ['', Validators.required],
      fuel: ['', Validators.required],
      seats: [5, [Validators.required, Validators.min(2)]],
      description: ['', Validators.required]
    });
  }

  saveCar(): void {
    this.submitted = true;
    if (this.form.invalid) return;

    const carData = {
      ...this.form.getRawValue(),
      gallery: [this.form.value.image || '']
    } as Omit<Car, 'id'>;

    if (this.editingCarId) {
      this.carService.updateCar(this.editingCarId, carData);
    } else {
      this.carService.addCar(carData);
    }

    this.refreshList();
    this.cancelEdit();
  }

  editCar(car: Car): void {
    this.editingCarId = car.id;
    this.form.patchValue(car);
  }

  deleteCar(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette voiture ?')) {
      this.carService.deleteCar(id);
      this.refreshList();
    }
  }

  toggleAvailability(id: number): void {
    this.carService.toggleAvailability(id);
    this.refreshList();
  }

  cancelEdit(): void {
    this.editingCarId = null;
    this.submitted = false;
    this.form.reset({
      brand: '',
      model: '',
      pricePerDay: 0,
      available: true,
      image: '',
      transmission: '',
      fuel: '',
      seats: 5,
      description: ''
    });
  }

  private refreshList(): void {
    this.cars = [...this.carService.getCars()];
  }
}