import { Component, OnInit } from '@angular/core';
import { ApplicationState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.count$ = this.store.select(getCurrent);
  }

  increment() {
    this.store.dispatch({ type: 'increment' });
  }

  decrement() {
    this.store.dispatch({ type: 'decrement' });
  }
  reset() {
    this.store.dispatch({ type: 'reset' });
  }

}

function getCurrent(state: ApplicationState) {
  return state.counter.current;
}
