import { createAction, props } from '@ngrx/store';
import { MovieEntity } from '../reducers/list.reducer';

let id = 1;

export const addMovie = createAction(
  '[movies] added a movie',
  ({ title, rentalDays, rentalPrice }: { title: string, rentalDays: number, rentalPrice: number }) => ({
    payload: {
      id: 'T' + (id++).toString(),
      title,
      rentalDays,
      rentalPrice
    } as MovieEntity
  })
);

export const addMovieSuccess = createAction(
  '[movies] added a movie successfully',
  props<{ oldId: string, payload: MovieEntity }>()
);

export const addedMovieFailure = createAction(
  '[movies] added a movie failure',
  props<{ errorMessage: string, badMovie: MovieEntity }>()
);

export const loadMovieSuccess = createAction(
  '[movies] loaded movies successfully',
  props<{ movies: MovieEntity[] }>()
);

export const loadMovieFailure = createAction(
  '[movies] failure in loading movies',
  props<{ error: string }>()
);
