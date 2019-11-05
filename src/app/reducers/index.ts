import * as fromCounter from './counter.reducer';
// TypeScript

export interface ApplicationState {
  counter: fromCounter.CounterState;
}

// This is what our module needs.
export const reducers = {
  counter: fromCounter.reducer
};
