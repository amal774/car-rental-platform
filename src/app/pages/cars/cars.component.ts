import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car.model';
import { CarCardComponent } from '../../components/car-card/car-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [FormsModule, CarCardComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  search = '';
  availability = 'all';
  cars: Car[] = [];

constructor(
  private carService: CarService,
  private route: ActivatedRoute
) {

  this.cars = this.carService.getCars();

  this.route.queryParams.subscribe(params => {

    this.search = params['search'] || '';

  });

}

  filteredCars(): Car[] {
    return this.cars.filter(c =>
      (c.brand + ' ' + c.model)
        .toLowerCase()
        .includes(this.search.toLowerCase()) &&
      (
        this.availability === 'all' ||
        (this.availability === 'available'
          ? c.available
          : !c.available)
      )
    );
  }
}