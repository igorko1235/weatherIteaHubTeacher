import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lazy',
    loadChildren: './first-lazy/first-lazy.module#FirstLazyModule',
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
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
