import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CarsService} from "../services/cars.service";
import {CarsModel} from "../models/cars.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import { DeleteDialogComponent } from "../delete-dialog/delete-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {EditCarsModalComponent} from "../edit-cars-modal/edit-cars-modal.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {

  list: CarsModel[] = [];

  displayedColumns: string[] = ['id', 'carName', 'year', 'fuel', 'price', 'edit', 'remove'];
  dataSource: MatTableDataSource<CarsModel> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  @ViewChild(MatSort) sort: MatSort | null;


  constructor(public carsService: CarsService, public dialog: MatDialog, public router: Router) {
  }

  ngOnInit(): void {
    this.getCarsList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getCarsList() {
    this.list = this.carsService.getCars();
    this.dataSource = new MatTableDataSource(this.list);
  }

  openEditModal(index: number) {
    const dialogRef = this.dialog.open(EditCarsModalComponent, {
      data:{
        list: this.list,
        currentElement: this.list[index],
        index: index,
        title: 'Update Car',
      },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    })
  }

  openDeleteModal(index: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data:{
        list: this.list,
        deleteElement: this.list[index],
        index: index,
        title: 'Delete Car',
        },
        disableClose: true,
    });
    dialogRef.afterClosed().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
