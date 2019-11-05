import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import { FizzBuzz } from '../components/counter/models';
// TypeScript

export interface ApplicationState {
  counter: fromCounter.CounterState;
}

// This is what our module needs.
export const reducers = {
  counter: fromCounter.reducer
};


// Selectors (selector functions)

// 1. If this is a feature, create a "feature selector"

// 2. Create a selector for each "branch" of the state.
const selectCounterBranch = (state: ApplicationState) => state.counter;

// 3. Create "Helpers" (optional)

// 4. Create the selectors you need for the components

// TODO: We need a function that returns the current value of the counter.

export const selectCurrentCount = createSelector(selectCounterBranch, b => b.current);
export const selectCountingBy = createSelector(selectCounterBranch, b => b.by);

export const selectDecrementDisabled = createSelector(
  selectCurrentCount,
  selectCountingBy,
  (current, by) => current - by < 0
);

export const selectFizzBuzz = createSelector(
  selectCurrentCount,
  (count) => {
    return {
      fizz: count === 0 ? false : count % 3 === 0,
      buzz: count === 0 ? false : count % 5 === 0,
    } as FizzBuzz;
  }
);
