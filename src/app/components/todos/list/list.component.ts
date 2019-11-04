import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items: TodoItem[] = [];
  constructor() { }

  ngOnInit() {
  }

  markComplete(item: TodoItem) {
    item.completed = true; // <-- bogus
  }
}
