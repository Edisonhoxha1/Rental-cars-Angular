import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
// import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {UserGuardGuard} from "./userGuard/user-guard.guard";

const routes: Routes = [
  { path: '', component: UserComponent, canActivate: [UserGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
