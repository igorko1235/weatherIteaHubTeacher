import { NgModule } from '@angular/core';
import {MdButtonModule,MatTabsModule,MatProgressBarModule, MdCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule,MatTabsModule,MatProgressBarModule, MdCheckboxModule],
  exports: [MdButtonModule,MatTabsModule,MatProgressBarModule, MdCheckboxModule],
})
export class MaterialModule { }
