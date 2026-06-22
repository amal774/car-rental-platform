import { Routes } from '@angular/router';
import { adminGuard } from './services/admin.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
  { path: 'cars', loadComponent: () => import('./pages/cars/cars.component').then(m => m.CarsComponent) },
  { path: 'cars/:id', loadComponent: () => import('./pages/car-details/car-details.component').then(m => m.CarDetailsComponent) },
  { path: 'reservation/:id', loadComponent: () => import('./pages/reservation/reservation.component').then(m => m.ReservationComponent) },
  { path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  {
    path: 'admin/cars',
    canActivate: [adminGuard],
    loadComponent: () => import('./pages/admin-cars/admin-cars.component').then(m => m.AdminCarsComponent)
  },
{
  path: 'reservation-summary',
  loadComponent: () =>
    import('./pages/reservation-summary/reservation-summary.component')
      .then(m => m.ReservationSummaryComponent)
},
  { path: '**', redirectTo: '' }
];
