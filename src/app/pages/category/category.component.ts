import { Component, OnInit, Input } from '@angular/core';
import { CardComponent, NavbarComponent } from '../../shared/components';
import { StateService } from '../../shared/utils/stateservices/state.services';
import { ButtonPrimaryComponent } from "../../shared/components/button-primary/button-primary.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    NavbarComponent,
    CardComponent,
    ButtonPrimaryComponent,
    MatIconModule
],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
input() {
throw new Error('Method not implemented.');
}
clickSaveData() {
throw new Error('Method not implemented.');
}

  isLoading: boolean = false;
  inputMessage: any;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.isLoading$.subscribe(value => {
      this.isLoading = value;
    });
  }

  openModal(){
    document.getElementById("modal")!.style.display = "grid"
  }

  closeModal(){
    document.getElementById("modal")!.style.display = "none"
  }

}
