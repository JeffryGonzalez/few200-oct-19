import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathGameComponent } from './math-game.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';



@NgModule({
  declarations: [MathGameComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [MathGameComponent]
})
export class MathGameModule { }
