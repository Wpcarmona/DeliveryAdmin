import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse, User } from '../../models/user.models';
import { environment } from '../../../../environments/environments';


@Injectable({
    providedIn: 'root', // Indica que este servicio está disponible a nivel global
  })
export class AuthService {
  private baseUrl = environment.apiBaseUrl;
  private apiUrl = `${this.baseUrl}/deliveryshop/auth/login`; 

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    const body = { email, password };

    return this.http.post<AuthResponse>(this.apiUrl, body);
  }
}
