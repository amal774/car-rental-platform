import { ChangeDetectorRef, Component } from '@angular/core';
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
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.carService.getCars().subscribe(cars => {
      this.popularCars = cars.slice(0, 3);
      this.cdr.detectChanges();
    });
  }

  searchCars(term: string): void {
    const search = term.trim();

    this.router.navigate(['/cars'], {
      queryParams: {
        search
      }
    });
  }
}
