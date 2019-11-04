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

@NgModule({
  declarations: [
    AppComponent,
    TipCalculatorComponent,
    HomeComponent,
    NavComponent,
    TodosComponent,
    EntryComponent,
    ListComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
