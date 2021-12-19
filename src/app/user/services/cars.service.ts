import { Injectable } from '@angular/core';
import {CarsModel} from "../models/cars.model";
import {BehaviorSubject, Subject} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  cartListSubject = new BehaviorSubject<CarsModel>({});

  constructor() { }

  getCars(): CarsModel[]{
    return JSON.parse(<string>localStorage.getItem('carsList'));
  }

  addCarInCart(){
    return JSON.parse(<string>localStorage.getItem('carsList'));
  }

  addToCartSubject(carData: any){
    this.cartListSubject.next(carData);
  }

  getCartValue(){
    return this.cartListSubject.asObservable();
  }
}
