import { Component, OnInit } from '@angular/core';
import { CardComponent, NavbarComponent } from '../../shared/components';
import { StateService } from '../../shared/utils/stateservices/state.services';

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
export class HomeComponent implements OnInit {

  isLoading: boolean = false;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.isLoading$.subscribe(value => {
      this.isLoading = value;
    });
  }

}
