import { Component, OnInit, Input } from '@angular/core';
import { FizzBuzz } from '../models';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit {

  @Input() model: FizzBuzz;
  constructor() { }

  ngOnInit() {
  }

}
