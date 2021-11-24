import {Component, OnInit, ViewChild} from '@angular/core';
import {CarsModel} from "../../admin/models/cars.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {CarsService} from "../services/cars.service";
import {DetailsComponent} from "../details/details.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: CarsModel[] = [];

  displayedColumns: string[] = ['id', 'carName', 'year', 'fuel', 'details'];
  dataSource: MatTableDataSource<CarsModel> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  @ViewChild(MatSort) sort: MatSort | null;


  constructor(public carsService: CarsService, public dialog: MatDialog, public router: Router) {
  }

  ngOnInit(): void {
    this.getCarsList();
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  getCarsList() {
    this.list = this.carsService.getCars();
    this.dataSource = new MatTableDataSource(this.list);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  detailsDialog(index: number) {
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: {
        detailsElement: this.list[index],
        index: index,
      },
      disableClose: true,
    })
  }

}
