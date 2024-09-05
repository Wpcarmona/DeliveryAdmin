import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent, LoaderComponent, NavbarComponent } from './shared/components';
import { HomeComponent } from "./pages/home/home.component";
import { EmployeesComponent } from "./pages/employees/employees.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    EmployeesComponent,
    LoaderComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isLoading = false;
  title = 'DeliveryAdmin';

  showLoader() {
    console.log('hola')
    this.isLoading = true;

    // Simular carga y ocultar loader después de 3 segundos
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
