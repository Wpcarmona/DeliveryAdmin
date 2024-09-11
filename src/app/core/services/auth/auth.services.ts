import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from } from 'rxjs';
import { AuthResponse } from '../../models/user.models';
import { environment } from '../../../../environments/environments';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiBaseUrl;
  private apiUrl = `${this.baseUrl}/deliveryshop/auth/login`;

  constructor(private cookieService: CookieService) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };

    // Convertir la promesa de Axios a un Observable usando `from`
    return from(
      axios
        .post<AuthResponse>(this.apiUrl, body) // withCredentials habilita el envío de cookies
        .then(response => response.data)
    );
  }

  // Método para recuperar el token desde la cookie
  getToken(): string | null {
    return this.cookieService.get('token');
  }
}
