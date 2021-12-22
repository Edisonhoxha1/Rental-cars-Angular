import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CarsModel} from "../models/cars.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

export interface DialogData {
  list: CarsModel[];
  currentElement: CarsModel;
  index: number;
  title: string
}
@Component({
  selector: 'app-edit-cars-modal',
  templateUrl: './edit-cars-modal.component.html',
  styleUrls: ['./edit-cars-modal.component.css']
})
export class EditCarsModalComponent implements OnInit {

  editCarForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditCarsModalComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
              public fb: FormBuilder) { }

  ngOnInit(): void {
    this.editCarForm = this.fb.group({
      id: new FormControl(this.dialogData.currentElement.id),
      carName: new FormControl(this.dialogData.currentElement.carName),
      year: new FormControl(this.dialogData.currentElement.year),
      fuel: new FormControl(this.dialogData.currentElement.fuel),
      price: new FormControl(this.dialogData.currentElement.price)
    })
  }

  editCar() {
    if (this.editCarForm.valid) {
      this.dialogData.currentElement = this.editCarForm.value;
      this.dialogData.list[this.dialogData.index] = this.dialogData.currentElement;
      localStorage.setItem('carsList', JSON.stringify(this.dialogData.list));
      this.dialogRef.close(this.dialogData.list);
    }
  }

  closemodal() {
    this.dialogRef.close()
  }

}
