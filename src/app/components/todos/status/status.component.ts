import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoItem } from '../models';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input() items$: Observable<TodoItem[]>;
  status$: Observable<StatusInfo>;
  constructor() { }

  ngOnInit() {
    this.status$ = this.items$.pipe(
      map(makeStatus)
    );
  }

}

interface StatusInfo {
  totalTodos: number;
  incompleteTodos: number;
}

// This is a "selector" - it knows how to take the items and make something else
// like a sort of query.
function makeStatus(items: TodoItem[]) {
  return {
    totalTodos: items.length,
    incompleteTodos: items.filter(item => item.completed === false).length
  } as StatusInfo;
}
