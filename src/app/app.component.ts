import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DeliveryAdmin';
  isLoginPage = false;
  isLoading = false;
  isSessionActive = true;

  constructor(private stateService: StateService, private router: Router) {
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url === '/login';
    });
  }
  ngOnInit(): void {
    this.isLoading = true;
    this.stateService.setIsLoading(true);
    if(!this.isSessionActive){
      this.isLoading = false;
      this.stateService.setIsLoading(false);
      this.router.navigate(['/login'])
    }else {
      this.isLoading = false;
      this.stateService.setIsLoading(false);
      this.router.navigate(['/'])
    }

  }

  showLoader() {
    this.stateService.setIsLoading(true);
    this.isLoading = true;

    setTimeout(() => {
      this.stateService.setIsLoading(false);
      this.isLoading = false;
    }, 3000);
  }
}
