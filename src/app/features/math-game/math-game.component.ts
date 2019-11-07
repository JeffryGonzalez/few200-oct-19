import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionEntity } from './reducers/questions.reducer';
import { Store } from '@ngrx/store';
import { MathGameState, selectCurrentQuestion, selectGameOverYouLose, selectGameOverWin, selectStillPlaying } from './reducers';
import { guessedCorrectly, guessedIncorrectly } from './actions/question.actions';

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
  constructor(private store: Store<MathGameState>) { }

  ngOnInit() {
    this.currentQuestion$ = this.store.select(selectCurrentQuestion);
    this.gameOverLose$ = this.store.select(selectGameOverYouLose);
    this.gameOverWin$ = this.store.select(selectGameOverWin);
    this.stillPlaying$ = this.store.select(selectStillPlaying);
  }

  provideAnswer(answer: string, answerEl: HTMLInputElement) {
    if (answer === answerEl.value) {
      this.store.dispatch(guessedCorrectly());
    } else {
      this.store.dispatch(guessedIncorrectly());
    }
  }
}
