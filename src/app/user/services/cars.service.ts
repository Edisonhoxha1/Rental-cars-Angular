import { Injectable } from '@angular/core';
import {CarsModel} from "../models/cars.model";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  addToCart: any;

  constructor() { }

  getCars(): CarsModel[]{
    return JSON.parse(<string>localStorage.getItem('carsList'));
  }

  getCarInCart(){
    return this.addToCart;
  }

}
