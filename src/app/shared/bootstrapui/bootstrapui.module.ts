import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  exports: [
    AlertModule
  ],
  imports: [
    CommonModule,
    AlertModule.forRoot()
  ],
  declarations: []
})
export class BootstrapUIModule { }
