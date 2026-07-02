import { ChangeDetectorRef, Component } from '@angular/core';
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
  actionError = '';
  actionSuccess = '';
  form;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private cdr: ChangeDetectorRef
  ) {
    this.refreshList();
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
    this.actionError = '';
    this.actionSuccess = '';
    if (this.form.invalid) return;

    const carData = {
      ...this.form.getRawValue(),
      gallery: [this.form.value.image || '']
    } as Omit<Car, 'id'>;

    if (this.editingCarId) {
      this.carService.updateCar(this.editingCarId, carData).subscribe({
        next: () => {
          this.actionSuccess = 'Voiture modifiee avec succes.';
          this.cancelEdit();
          this.refreshList();
          this.cdr.detectChanges();
        },
        error: () => {
          this.actionError = 'Impossible de modifier la voiture. Verifiez que car-service et api-gateway sont demarres.';
        }
      });
    } else {
      this.carService.addCar(carData).subscribe({
        next: () => {
          this.actionSuccess = 'Voiture ajoutee avec succes.';
          this.cancelEdit();
          this.refreshList();
          this.cdr.detectChanges();
        },
        error: () => {
          this.actionError = 'Impossible d ajouter la voiture. Verifiez que car-service et api-gateway sont demarres.';
        }
      });
    }
  }

  editCar(car: Car): void {
    this.editingCarId = car.id;
    this.form.patchValue(car);
    this.cdr.detectChanges();
  }

  deleteCar(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette voiture ?')) {
      this.carService.deleteCar(id).subscribe({
        next: () => {
          this.actionSuccess = 'Voiture supprimee avec succes.';
          this.refreshList();
          this.cdr.detectChanges();
        },
        error: () => {
          this.actionError = 'Impossible de supprimer la voiture.';
        }
      });
    }
  }

  toggleAvailability(id: number): void {
    const current = this.cars.find(car => car.id === id);
    if (!current) return;

    const toggled = { ...current, available: !current.available };
    this.cars = this.cars.map(item => item.id === id ? toggled : item);
    this.cdr.detectChanges();

    this.carService.updateCar(id, toggled).subscribe({
      next: car => {
        this.cars = this.cars.map(item => item.id === id ? car : item);
        this.cdr.detectChanges();
      },
      error: () => {
        this.cars = this.cars.map(item => item.id === id ? current : item);
        this.actionError = 'Impossible de changer la disponibilite.';
        this.cdr.detectChanges();
      }
    });
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
    this.carService.getCars().subscribe({
      next: cars => {
        this.cars = [...cars];
        this.cdr.detectChanges();
      },
      error: () => {
        this.actionError = 'Impossible de charger les voitures. Verifiez que car-service est demarre.';
        this.cdr.detectChanges();
      }
    });
  }
}
