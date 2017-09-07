import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AboutComponent} from "./about/about.component";
import {HelpComponent} from "./help/help.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'help',
    component: HelpComponent, children: [
      {path: '1', component: HelpComponent},
      {path: '2', component: HelpComponent},
      {path: '3', component: HelpComponent},
      {path: '4', component: HelpComponent},
    ]
  },
  {
    path: 'not_found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not_found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
