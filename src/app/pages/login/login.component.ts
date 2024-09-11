import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupName, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../core/services/auth/auth.services';
import { User } from '../../core/models/user.models';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  showPassword: boolean = false;
  email: string = '';
  password: string = '';
  user: User | null = null;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Validación para estructura de email
      password: ['', [Validators.required, Validators.minLength(6)]],  // Mínimo 6 caracteres
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response.header[0].code === 200) {
          this.user = response.body[0];
          // Aquí podrías redirigir al usuario o guardar el estado de autenticación
          console.log('Usuario autenticado:', this.user);
        } else {
          this.errorMessage = response.header[0].error;
        }
      },
      error: (err) => {
        console.error('Error de autenticación:', err);
        this.errorMessage = 'Error en la autenticación. Inténtalo de nuevo más tarde.';
      }
    });
  }
}
