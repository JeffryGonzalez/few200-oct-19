import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface MovieEntity {
  id: string;
  title: string;
  rentalDays: number;
  rentalPrice: number;
}

export interface State extends EntityState<MovieEntity> {

}

export const adapter = createEntityAdapter<MovieEntity>();


const initialState = adapter.getInitialState();
// const initialState: State = {
//   ids: ['1', '2'],
//   entities: {
//     1: { id: '1', title: 'Return of the Jedi', rentalPrice: 2.99, rentalDays: 5 },
//     2: { id: '2', title: 'The Empire Strikes Back', rentalPrice: 3.99, rentalDays: 3 }
//   }
// };

const reducerFunction = createReducer(
  initialState,
  on(actions.addMovie, (state, action) => adapter.addOne(action.payload, state)),
  on(actions.loadMovieSuccess, (state, action) => adapter.addAll(action.movies, state)),
  on(actions.addMovieSuccess, (state, action) => {
    const tempState = adapter.removeOne(action.oldId, state);
    return adapter.addOne(action.payload, tempState);
  })
);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}



