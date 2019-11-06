import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FizzBuzz } from '../models';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FizzBuzzComponent implements OnInit {

  @Input() model: FizzBuzz;
  constructor() { }

  ngOnInit() {
  }

}
