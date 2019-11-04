import { Component, OnInit } from '@angular/core';
import { TodoItem } from './models';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  id = 2;

  stuff: TodoItem[] = [
    { id: '1', description: 'Clean Carpets', completed: true },
    { id: '2', description: 'Fix Gutters', completed: false }
  ];
  constructor() { }

  ngOnInit() {
  }

  onItemAdded(description: string) {

    this.id++;
    const itemToAdd: TodoItem = {
      id: this.id.toString(), description, completed: false
    };
    this.stuff = [itemToAdd, ...this.stuff];

  }

}
