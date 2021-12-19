import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AddCarsComponent} from "./add-cars/add-cars.component";
import {ListComponent} from "./list/list.component";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { EditCarsComponent } from './edit-cars/edit-cars.component';
import { EditCarsModalComponent } from './edit-cars-modal/edit-cars-modal.component';
import { ReservedCarsComponent } from './reserved-cars/reserved-cars.component';


@NgModule({
    declarations: [
        AdminComponent,
        AddCarsComponent,
        ListComponent,
        DeleteDialogComponent,
        EditCarsComponent,
        EditCarsModalComponent,
        ReservedCarsComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatAutocompleteModule,
        MatCardModule,
        ReactiveFormsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatDialogModule,
        MatSnackBarModule,
        FormsModule
    ]
})
export class AdminModule { }
