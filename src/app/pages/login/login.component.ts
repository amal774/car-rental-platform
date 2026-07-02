import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginError = false;
  form;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit(): void {

    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.getRawValue();

    this.authService.login(email || '', password || '').subscribe({
      next: () => {
        if (this.authService.isAdmin()) {
          this.router.navigate(['/admin/cars']);
        } else {
          this.router.navigate(['/profile']);
        }
      },
      error: () => {
        this.loginError = true;
      }
    });
  }
}
