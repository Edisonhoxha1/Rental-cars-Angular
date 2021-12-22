import { Component, OnInit } from '@angular/core';
import {CarsService} from "../services/cars.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-cars',
  templateUrl: './edit-cars.component.html',
  styleUrls: ['./edit-cars.component.css']
})
export class EditCarsComponent implements OnInit {

  editCars!: FormGroup;
  carUpdate: any = [];
  userId : any;
  carUpdated: any = [];

  constructor(public activatedRoute: ActivatedRoute, public carsService: CarsService, public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id;
    });

    if(this.userId !== ''){
      this.carUpdate = this.carsService.editCars('id');
      for(let i = 0; i < this.carUpdate.length; i++){
        if(this.carUpdate[i].id == this.userId) {
          this.editCars = this.formBuilder.group({
            carName: new FormControl(this.carUpdate[i].carName),
            year: new FormControl(this.carUpdate[i].year),
            fuel: new FormControl(this.carUpdate[i].fuel),
            price: new FormControl(this.carUpdate[i].price)
          })
          console.log(this.carUpdate[i].year);
        }
        // console.log(this.car.year);
      }
    }
  }

  editCar() {
    if (this.editCars.valid) {
      this.carUpdated = JSON.parse(<string>localStorage.getItem('carsList'));
          this.carUpdated.push(this.editCars.value);
          localStorage.setItem('carsList', JSON.stringify(this.carUpdated));
          this.router.navigate(['admin']);
    }
  }

}
