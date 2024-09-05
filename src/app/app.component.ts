import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent, LoaderComponent, NavbarComponent } from './shared/components';
import { HomeComponent } from "./pages/home/home.component";
import { EmployeesComponent } from "./pages/employees/employees.component";
import { StateService } from './shared/utils/stateservices/state.services';

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

  constructor(private stateService: StateService) {}


  showLoader() {
    console.log('hola')
    this.stateService.setIsLoading(true);
    this.isLoading = true;

    // Simular carga y ocultar loader después de 3 segundos
    setTimeout(() => {
      this.stateService.setIsLoading(false);
      this.isLoading = false;
    }, 3000);
  }
}
