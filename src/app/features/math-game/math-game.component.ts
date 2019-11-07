import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionEntity } from './reducers/questions.reducer';
import { Store } from '@ngrx/store';
import { MathGameState, selectCurrentQuestion, selectGameOverYouLose, selectGameOverWin, selectStillPlaying } from './reducers';
import { guessedCorrectly, guessedIncorrectly, playAgain } from './actions/question.actions';

@Component({
  selector: 'app-math-game',
  templateUrl: './math-game.component.html',
  styleUrls: ['./math-game.component.css']
})
export class MathGameComponent implements OnInit {

  currentQuestion$: Observable<QuestionEntity>;
  gameOverLose$: Observable<boolean>;
  stillPlaying$: Observable<boolean>;
  gameOverWin$: Observable<boolean>;
  wrong = false;
  constructor(private store: Store<MathGameState>) { }

  ngOnInit() {
    this.currentQuestion$ = this.store.select(selectCurrentQuestion);
    this.gameOverLose$ = this.store.select(selectGameOverYouLose);
    this.gameOverWin$ = this.store.select(selectGameOverWin);
    this.stillPlaying$ = this.store.select(selectStillPlaying);
  }

  replay() {
    this.store.dispatch(playAgain());
    this.wrong = false;
  }
  provideAnswer(answer: string, answerEl: HTMLInputElement) {
    if (answer === answerEl.value) {
      this.store.dispatch(guessedCorrectly());
      this.wrong = false;
      answerEl.value = '';
      answerEl.focus();
    } else {
      this.store.dispatch(guessedIncorrectly());
      this.wrong = true;
      answerEl.select();
      answerEl.focus();
    }
  }
}
