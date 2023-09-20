import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PortableComponent } from './portable/portable.component';
import {LoginComponent} from "./login/login.component";
import {authGuard} from "./auth.guard";


const routes: Routes = [
  {path: 'users', component: UsersComponent, canActivate:[authGuard] },
  {path: 'portables', component: PortableComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
