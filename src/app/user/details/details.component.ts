import {Component, Inject, OnInit} from '@angular/core';
import {CarsModel} from "../models/cars.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CarsService} from "../services/cars.service";

export interface DialogData {
  detailsElement: CarsModel,
  index: number,
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  carDetails: any;

  constructor(public dialogRef: MatDialogRef<DetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
              public carsService: CarsService) { }

  ngOnInit(): void {
    this.carDetails = this.dialogData.detailsElement;
  }

  closeModal(){
    this.dialogRef.close();
  }

  addToCart(){
    console.log(this.carsService.addCarInCart());
    this.carsService.addToCartSubject(this.carDetails);
    this.dialogRef.close();
  }

}
