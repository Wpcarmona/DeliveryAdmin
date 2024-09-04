import { Component } from '@angular/core';
import { CardComponent, NavbarComponent } from '../../shared/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
