import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { UUID } from 'angular2-uuid';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.css']
})
export class AddCarsComponent implements OnInit {

  addCars!: FormGroup;
  cars: any = [];

  constructor(public formBuilder: FormBuilder, public router: Router, public snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.addCars = this.formBuilder.group({
      id : new FormControl(UUID.UUID(), Validators.required),
      carName : new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      fuel: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    })
  }

  add() {
    if (this.addCars.valid) {
      // localStorage.setItem('carsList', JSON.stringify(this.cars));


      if(localStorage.getItem('carsList') === null){
        this.cars = [];
      } else {
        this.cars = JSON.parse(<string>localStorage.getItem('carsList'))
      }
      // this.cars[this.addCars.value.id] = this.addCars.value;
      // localStorage.setItem('carsList', JSON.stringify(this.cars));

      // this.cars = JSON.parse(<string>localStorage.getItem('carsList'))
      this.cars.push(this.addCars.value);
      localStorage.setItem('carsList', JSON.stringify(this.cars));
      this.snackbar.open('Car added successful');
      this.router.navigate(['admin']);
    }
  }
}
