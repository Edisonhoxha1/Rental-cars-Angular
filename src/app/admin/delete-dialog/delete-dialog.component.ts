import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CarsModel} from "../models/cars.model";

export interface DialogData {
  list: CarsModel [],
  deleteElement: CarsModel,
  index: number,
  title: string,
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close()
  }

  deleteCar(index: any) {
    this.dialogData.list.splice(index, 1);
    console.log(this.dialogData.list);
    localStorage.setItem('carsList', JSON.stringify(this.dialogData.list));
    this.dialogRef.close(this.dialogData.list);
  }

}
