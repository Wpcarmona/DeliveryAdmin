import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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

  menuVisible = false;
  sidebarVisible = false;

  toggleMenu() {
    console.log(this.menuVisible)
    this.menuVisible = !this.menuVisible;
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  toggleDropdown() {
    this.menuVisible = !this.menuVisible;
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
}
