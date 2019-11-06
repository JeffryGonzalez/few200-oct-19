import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TodosComponent } from './components/todos/todos.component';
import { EntryComponent } from './components/todos/entry/entry.component';
import { ListComponent } from './components/todos/list/list.component';
import { TodoDataService } from './services/todo-data.service';
import { StatusComponent } from './components/todos/status/status.component';
import { ValidationService } from './services/validation-service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { CounterComponent } from './components/counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';
import { FizzBuzzComponent } from './components/counter/fizz-buzz/fizz-buzz.component';
import { MoviesModule } from './features/movies/movies.module';

@NgModule({
  declarations: [
    AppComponent,
    TipCalculatorComponent,
    HomeComponent,
    NavComponent,
    TodosComponent,
    EntryComponent,
    ListComponent,
    StatusComponent,
    CounterComponent,
    FizzBuzzComponent
  ],
  imports: [
    MoviesModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [TodoDataService, ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
