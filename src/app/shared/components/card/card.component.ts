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

  @Input() isLoading: boolean = true;
  @Input() icon: string = 'shopping_bag'; 
  @Input() number: string = '150'; 
  @Input() label: string = 'Número de órdenes activas';
  @Input() iconColor: string = 'orange'; 


}
