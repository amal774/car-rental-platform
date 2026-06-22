import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

function match(a: string, b: string) {
  return (c: AbstractControl) =>
    c.get(a)?.value === c.get(b)?.value
      ? null
      : { mismatch: true };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form;

  constructor(private fb: FormBuilder) {

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

    if (this.form.valid) {
      alert('Compte créé');
    }
  }
}