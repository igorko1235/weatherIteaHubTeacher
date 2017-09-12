import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstLazyRoutingModule } from './first-lazy-routing.module';
import { TestComponent } from './test/test.component';
import { SharedModule }  from "../shared/shared.module";
import { Test2Component } from './test2/test2.component';
import {TestService} from "./test.service";
@NgModule({
  imports: [
    CommonModule,
    FirstLazyRoutingModule,
    SharedModule
  ],
  declarations: [TestComponent, Test2Component],
  providers: [TestService]
})
export class FirstLazyModule { }
