import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse, User } from '../../models/user.models';


@Injectable({
    providedIn: 'root', // Indica que este servicio está disponible a nivel global
  })
export class AuthService {
  private apiUrl = 'http://localhost:8080/deliveryshop/auth/login'; // Reemplaza {{url}} con tu URL base

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    const body = { email, password };

    return this.http.post<AuthResponse>(this.apiUrl, body);
  }
}
