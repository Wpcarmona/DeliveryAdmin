import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent, NavbarComponent } from './shared/components';
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
    EmployeesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DeliveryAdmin';
}
