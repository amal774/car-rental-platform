import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

import { API_BASE_URL } from '../config/api.config';
import { User } from '../models/user.model';

interface LoginResponse {
  token: string;
  id: number;
  fullName: string;
  email: string;
  isAdmin: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userStorageKey = 'rentcar_current_user';
  private readonly tokenStorageKey = 'rentcar_auth_token';
  private readonly apiUrl = `${API_BASE_URL}/auth`;

  private currentUser: User | null = this.loadUser();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => localStorage.setItem(this.tokenStorageKey, response.token)),
      tap(response => {
        const user = this.buildUserFromLoginResponse(response);
        this.currentUser = user;
        localStorage.setItem(this.userStorageKey, JSON.stringify(user));
      }),
      map(() => true)
    );
  }

  register(user: User & { password?: string }): Observable<boolean> {
    const payload = {
      fullName: `${user.firstName} ${user.lastName}`.trim(),
      email: user.email,
      password: user.password
    };

    return this.http.post(`${this.apiUrl}/register`, payload, { responseType: 'text' }).pipe(
      map(message => message.toLowerCase().includes('success'))
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenStorageKey);
  }

  getUser(): User | null {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  isAdmin(): boolean {
    return this.currentUser?.isAdmin === true;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem(this.userStorageKey);
    localStorage.removeItem(this.tokenStorageKey);
  }

  private buildUserFromLoginResponse(response: LoginResponse): User {
    const [firstName, ...lastNameParts] = response.fullName.split(' ');

    return {
      id: response.id,
      firstName: firstName || response.email,
      lastName: lastNameParts.join(' '),
      age: 18,
      email: response.email,
      role: response.isAdmin ? 'admin' : 'client',
      isAdmin: response.isAdmin
    };
  }

  private loadUser(): User | null {
    const data = localStorage.getItem(this.userStorageKey);
    return data ? JSON.parse(data) as User : null;
  }
}
