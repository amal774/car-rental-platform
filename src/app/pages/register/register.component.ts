import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { NotificationComponent } from '../../components/notification/notification.component';

function match(a: string, b: string) {
  return (c: AbstractControl) =>
    c.get(a)?.value === c.get(b)?.value
      ? null
      : { mismatch: true };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NotificationComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form;
  registerError = false;
  showNotification = false;
  notificationTitle = '';
  notificationMessage = '';
  shouldNavigateToLogin = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      age: [18, [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: [
        match('email', 'confirmEmail'),
        match('password', 'confirmPassword')
      ]
    });
  }

  submit(): void {
    this.form.markAllAsTouched();
    this.registerError = false;

    if (this.form.invalid) {
      return;
    }

    const value = this.form.getRawValue();

    this.authService.register({
      firstName: value.firstName || '',
      lastName: value.lastName || '',
      age: value.age || 18,
      email: value.email || '',
      password: value.password || ''
    }).subscribe({
      next: success => {
        if (success) {
          this.openNotification(
            'Compte cree',
            'Votre compte a ete cree avec succes. Vous pouvez maintenant vous connecter.',
            true
          );
          return;
        }

        this.showRegisterError();
      },
      error: () => {
        this.showRegisterError();
      }
    });
  }

  closeNotification(): void {
    this.showNotification = false;

    if (this.shouldNavigateToLogin) {
      this.router.navigate(['/login']);
    }
  }

  private openNotification(title: string, message: string, navigateToLogin = false): void {
    this.notificationTitle = title;
    this.notificationMessage = message;
    this.shouldNavigateToLogin = navigateToLogin;
    this.showNotification = true;
  }

  private showRegisterError(): void {
    this.registerError = true;
    this.openNotification(
      'Inscription impossible',
      'Verifiez que auth-service et api-gateway sont demarres, ou que cet email n existe pas deja.'
    );
  }
}
