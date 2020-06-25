import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { CattcPipe } from './pipes/cattc.pipe';



@NgModule({
  declarations: [TotalPipe, StateDirective, CattcPipe],
  imports: [
    CommonModule
  ],
  exports: [TotalPipe, StateDirective, CattcPipe]
})
export class SharedModule { }
