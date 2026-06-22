import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private storageKey = 'rentcar_current_user';

  private users = [
    {
      id: 1,
      firstName: 'Admin',
      lastName: 'RentCar',
      age: 30,
      email: 'admin@rentcar.com',
      password: 'admin123',
      role: 'admin' as const
    },
    {
      id: 2,
      firstName: 'Client',
      lastName: 'Demo',
      age: 24,
      email: 'client@rentcar.com',
      password: 'client123',
      role: 'client' as const
    }
  ];

  private currentUser: User | null = this.loadUser();

  login(email: string, password: string): boolean {
    const foundUser = this.users.find(
      user => user.email.toLowerCase() === email.toLowerCase() && user.password === password
    );

    if (!foundUser) {
      this.currentUser = null;
      localStorage.removeItem(this.storageKey);
      return false;
    }

    const { password: _password, ...safeUser } = foundUser;
    this.currentUser = safeUser;
    localStorage.setItem(this.storageKey, JSON.stringify(safeUser));
    return true;
  }

  register(user: User): boolean {
    const newUser = { ...user, id: Date.now(), role: 'client' as const };
    this.currentUser = newUser;
    localStorage.setItem(this.storageKey, JSON.stringify(newUser));
    return true;
  }

  getUser(): User | null {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem(this.storageKey);
  }

  private loadUser(): User | null {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) as User : null;
  }
}
