export const featureName = 'mathGameFeature';
import * as fromQuestions from './questions.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export interface MathGameState {
  questions: fromQuestions.State;
}

export const reducers = {
  questions: fromQuestions.reducer
};


const selectFeature = createFeatureSelector<MathGameState>(featureName);

const selectQuestionsBranch = createSelector(selectFeature, f => f.questions);


const {
  selectEntities: selectQuestionEntities,
  selectTotal: selectNumberOfQuestions
} = fromQuestions.adapter.getSelectors(selectQuestionsBranch);

const selectCurrentQuestionNumber = createSelector(selectQuestionsBranch, b => b.currentQuestion);
const selectNumberWrong = createSelector(selectQuestionsBranch, b => b.wrongGuesses);
export const selectGameOverYouLose = createSelector(selectNumberWrong, w => w >= 3);

export const selectGameOverWin = createSelector(
  selectNumberOfQuestions,
  selectCurrentQuestionNumber,
  selectGameOverYouLose,
  (numberOfQuestions, currentQuestionNumber, gameOver) => {
    if (numberOfQuestions === currentQuestionNumber - 1 && !gameOver) {
      return true;
    } else {
      return false;
    }
  }
);


export const selectCurrentQuestion = createSelector(selectQuestionEntities, selectCurrentQuestionNumber, (q, c) => q[c]);

export const selectStillPlaying = createSelector(
  selectGameOverWin,
  selectGameOverYouLose,
  (w, l) => (!w) && (!l)
);
