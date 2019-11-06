import { createAction } from '@ngrx/store';
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
