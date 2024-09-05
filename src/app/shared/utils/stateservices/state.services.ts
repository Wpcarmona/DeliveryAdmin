import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Asegúrate de que el servicio esté disponible globalmente
})
export class StateService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  private isLoadergSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();
  isLoader = this.isLoadergSubject.asObservable();

  setIsLoading(value: boolean) {
    this.isLoadingSubject.next(value);
  }

  setisLoader(value: boolean){
    this.isLoadergSubject.next(value);
  }
}