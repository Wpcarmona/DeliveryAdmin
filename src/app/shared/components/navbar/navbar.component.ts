import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router){}

  menuVisible = false;
  sidebarVisible = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  toggleDropdown() {
    this.menuVisible = !this.menuVisible;
  }

  closeSidebar() {
    this.sidebarVisible = false;
  }

  clickOutside(event: Event) {
    // Verifica si el clic está fuera del sidebar y del menú desplegable
    const target = event.target as HTMLElement;
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    const dropdown = document.querySelector('.dropdown-menu') as HTMLElement;
    
    if (sidebar && !sidebar.contains(target) && !dropdown.contains(target)) {
      this.sidebarVisible = false;
      this.menuVisible = false;
    }
  }

  goToReports() {
    this.router.navigate(['/reports']);
  }
  
  goToEmployess(){
    this.router.navigate(['/employess']);
  }

  goToCategory(){
    this.router.navigate(['/category']);
  }

  goToProducts(){
    this.router.navigate(['/products']);
  }

  goToOrders(){
    this.router.navigate(['/orders']);
  }

  goToInventory(){
    this.router.navigate(['/inventory']);
  }

  goToDeposit(){
    this.router.navigate(['/deposit']);
  }

  goToWithdraw(){
    this.router.navigate(['/withdraw']);
  }

  goTooffers(){
    this.router.navigate(['/offers']);
  }

  goToHome(){
    this.router.navigate(['']);
  }
}
