import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {AddCarsComponent} from "./add-cars/add-cars.component";
import {AuthGuardGuard} from "./authGuard/auth-guard.guard";
import {ReservedCarsComponent} from "./reserved-cars/reserved-cars.component";

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AuthGuardGuard] },
  { path: 'add-cars', component: AddCarsComponent },
  { path: 'reserved-cars', component: ReservedCarsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
