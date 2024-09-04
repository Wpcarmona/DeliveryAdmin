import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() icon: string = 'shopping_bag'; // Parámetro para el icono de Material Design
  @Input() number: string = '150'; // Parámetro para el valor numérico
  @Input() label: string = 'Número de órdenes activas'; // Parámetro para el texto
  @Input() iconColor: string = 'orange'; // Parámetro para el color del icono

}
