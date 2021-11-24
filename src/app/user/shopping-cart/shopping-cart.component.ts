import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import {CarsService} from "../services/cars.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  isExpaded: boolean = false;

  carReserved: any;

  constructor(public carsService: CarsService) { }

  ngOnInit(): void {
    // // this.carReserved = this.carsService.getCarInCart();
    // // console.log(this.carReserved.year);
    // // console.log(this.carsService.getCarInCart());
    // // console.log("ddddd");
    // this.carReserved = this.carsService.test;
    // console.log((this.carsService.test));
  }

}
