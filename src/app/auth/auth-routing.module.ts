import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserPanelComponent} from './user-panel/user-panel.component';

const routes: Routes = [
  { path: '/', component: LoginComponent },
  { path: '/register', component: RegisterComponent },
  { path: '/user-panel', component: UserPanelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
