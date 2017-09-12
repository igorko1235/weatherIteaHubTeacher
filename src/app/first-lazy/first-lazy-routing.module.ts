import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {Test2Component} from "./test2/test2.component";

const routes: Routes = [
  {
    path: '',
    component: TestComponent
  },
  {
    path: '2',
    component: Test2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstLazyRoutingModule { }
