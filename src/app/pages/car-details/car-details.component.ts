import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent {
  car?: Car;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private cdr: ChangeDetectorRef
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCarById(id).subscribe(car => {
      this.car = car;
      this.cdr.detectChanges();
    });
  }
}
