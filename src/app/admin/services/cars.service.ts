import { Injectable } from '@angular/core';
import {CarsModel} from "../models/cars.model";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getCars(): CarsModel[]{
    return JSON.parse(<string>localStorage.getItem('carsList'));
  }

  editCars(id: string) {
    return JSON.parse(<string>localStorage.getItem('carsList'));
  }

  reservedCars(){
    return JSON.parse(<string>localStorage.getItem('reservedCarsList'));
  }
}
