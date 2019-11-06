import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieListItem } from '../models';
import { Observable } from 'rxjs';

export const featureName = 'moviesFeature';

export interface MoviesState {
  list: fromList.State;
}


export const reducers = {
  list: fromList.reducer
};

// Selectors

// 1. Feature Selector
export const _selectMoviesFeature = createFeatureSelector<MoviesState>(featureName);
// 2. Selector Per Branch
export const _selectListBranch = createSelector(_selectMoviesFeature, m => m.list);
// 3. Helpers (optional)

export const { selectAll: _selectMovieListArray } = fromList.adapter.getSelectors(_selectListBranch);
// 4. What the components need.

// Todo: We need a selector that returns a MovieListItem[] for our list.
export const selectMovieListItems = createSelector(
  _selectMovieListArray,
  (movies) => movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    rentalPrice: movie.rentalPrice,
    rentalDays: movie.rentalDays,
    isTemporary: movie.id.startsWith('T')
  } as MovieListItem)));

