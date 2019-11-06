import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MoviesState, selectMovieListItems } from './reducers';
import { Observable } from 'rxjs';
import { MovieListItem } from './models';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<MovieListItem[]>;
  constructor(private store: Store<MoviesState>) { }

  ngOnInit() {
    this.movies$ = this.store.select(selectMovieListItems);
  }

}
