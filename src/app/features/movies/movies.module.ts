import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './effects/list.effects';
import { NflComponent } from './components/nfl/nfl.component';
@NgModule({
  declarations: [MoviesComponent, EntryComponent, ListComponent, NflComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([ListEffects])
  ],
  exports: [MoviesComponent]
})
export class MoviesModule { }
