import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car.model';
import { CarCardComponent } from '../../components/car-card/car-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CarCardComponent, SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  term = '';
  popularCars: Car[] = [];

  constructor(
    private carService: CarService,
    private router: Router
  ) {
    this.popularCars = this.carService.getCars().slice(0, 3);
  }

  searchCars(term: string): void {
    this.router.navigate(['/cars'], {
      queryParams: {
        search: term
      }
    });
  }
}