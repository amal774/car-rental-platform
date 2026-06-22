import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
  <nav class="navbar">
    <div class="container nav-content">
      <a routerLink="/" class="logo"><i class="fa-solid fa-car"></i> CARSOLYSE RentCar</a>
      <div class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Accueil</a>
        <a routerLink="/cars" routerLinkActive="active">Voitures</a>
        <a routerLink="/about" routerLinkActive="active">À propos</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
        @if(authService.isAdmin()){
          <a routerLink="/admin/cars" routerLinkActive="active">Admin</a>
        }
        @if(authService.isLoggedIn()){
          <button class="login" type="button" (click)="logout()">Déconnexion</button>
        } @else {
          <a routerLink="/login" class="login">Connexion</a>
        }
      </div>
    </div>
  </nav>`,
  styles: [`.navbar{background:#fff;position:sticky;top:0;z-index:10;box-shadow:0 4px 20px rgba(0,0,0,.06)}.nav-content{height:76px;display:flex;align-items:center;justify-content:space-between}.logo{font-size:24px;font-weight:900;color:#0d6efd}.nav-links{display:flex;align-items:center;gap:28px;font-weight:700}.active{color:#0d6efd}.login{background:#0d6efd;color:#fff;padding:10px 16px;border-radius:12px;border:0;font-weight:800;cursor:pointer}@media(max-width:800px){.nav-content{height:auto;padding:16px;align-items:flex-start}.nav-links{flex-wrap:wrap;gap:14px}.logo{margin-right:10px}}`]
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
