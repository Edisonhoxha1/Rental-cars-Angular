import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ReservedCasModel} from "../models/cars.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CarsService} from "../services/cars.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reserved-cars',
  templateUrl: './reserved-cars.component.html',
  styleUrls: ['./reserved-cars.component.css']
})
export class ReservedCarsComponent implements OnInit, AfterViewInit {

  reservedList: ReservedCasModel[] = [];

  displayedColumns: string[] = ['id', 'carName', 'year', 'fuel', 'reservedDate'];
  dataSource: MatTableDataSource<ReservedCasModel> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  @ViewChild(MatSort) sort: MatSort | null;


  constructor(public carsService: CarsService, public router: Router) {
  }

  ngOnInit(): void {
    this.getReservedCarsList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getReservedCarsList() {
    let start = "20-11-2021";
    let end = "28-12-2021";

    console.log(this.carsService.reservedCars());
    this.reservedList = this.carsService.reservedCars().filter(
      (element: ReservedCasModel) => new Date(element.reservedDate) >= new Date(start) && new Date(element.reservedDate) <= new Date(end)
    );
    console.log(this.reservedList);

    this.dataSource = new MatTableDataSource(this.reservedList);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
