import {Component, Inject, OnInit} from '@angular/core';
import {CarsService} from "../services/cars.service";
import {CarsModel} from "../models/cars.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CarsModel[] = [];
  cartTotal?: string;

  constructor(public carsService: CarsService) { }

  ngOnInit(): void {
    const shoppingLocalStorage = localStorage.getItem('shoppingCart');
    if (shoppingLocalStorage) {
      this.cartItems = JSON.parse(shoppingLocalStorage);
    }
    this.carsService.getCartValue().subscribe((carData : CarsModel) => {
      console.log(carData);
      if (carData) {
        this.cartItems.push(carData);
        localStorage.setItem('shoppingCart', JSON.stringify(this.cartItems));
      }
    })

    // this.cartTotal = 0;
    this.cartItems.forEach(item => {
      // this.cartTotal += item.carName;
    })
  }

  emptyCart(){
    localStorage.removeItem('shoppingCart');
    this.cartItems.splice(0, this.cartItems.length);
  }

}
