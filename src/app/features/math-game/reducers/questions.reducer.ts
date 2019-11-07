import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/question.actions';
export interface QuestionEntity {
  id: number;
  question: string;
  answer: number;
}

export interface State extends EntityState<QuestionEntity> {
  currentQuestion: number;
  wrongGuesses: number;
}

export const adapter = createEntityAdapter<QuestionEntity>();

// const initialState = adapter.getInitialState();

const initialState: State = {
  ids: [1, 2, 3],
  entities: {
    1: { id: 1, question: '2 + 2', answer: 4 },
    2: { id: 2, question: '3 * 3', answer: 9 },
    3: { id: 3, question: '10 + 5', answer: 15 }
  },
  currentQuestion: 1,
  wrongGuesses: 0
};

const reducerFunction = createReducer(
  initialState,
  on(actions.guessedCorrectly, (state) => ({ ...state, currentQuestion: state.currentQuestion + 1 })),
  on(actions.guessedIncorrectly, (state) => ({ ...state, wrongGuesses: state.wrongGuesses + 1 }))
);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}



