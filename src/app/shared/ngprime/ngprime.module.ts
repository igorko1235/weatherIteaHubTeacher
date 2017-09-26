import { NgModule } from '@angular/core';
import {MultiSelectModule,ChartModule} from 'primeng/primeng';

@NgModule({
  imports: [MultiSelectModule,ChartModule],
  exports: [MultiSelectModule,ChartModule]
})
export class NgprimeModule { }
