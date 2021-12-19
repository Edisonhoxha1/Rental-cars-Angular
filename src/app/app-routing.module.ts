import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },
  { path: 'user', loadChildren: () => import('../app/user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
