import { createAction, props } from '@ngrx/store';

export const guessedCorrectly = createAction(
  '[math game] guessed correctly'
);

export const guessedIncorrectly = createAction(
  '[math game] guessed incorrectly'
);

export const playAgain = createAction(
  '[math game] play again'
);
