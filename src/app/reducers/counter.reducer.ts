import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';
// Make TypeScript Happy

export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1
};


export function reducer(state: CounterState, action: Action): CounterState {
  return myReducer(state, action);
}

const myReducer = createReducer(
  initialState,
  on(actions.reset, () => initialState),
  on(actions.increment, (state) => ({ ...state, current: state.current + state.by })),
  on(actions.decrement, (state) => ({ ...state, current: state.current - state.by })),
  on(actions.countBySet, (state, action) => ({ ...state, by: action.by }))
);



