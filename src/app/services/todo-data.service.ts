import { TodoItem } from '../components/todos/models';
import { BehaviorSubject, of, Observable } from 'rxjs';

export class TodoDataService {

  private subject: BehaviorSubject<TodoItem[]>;
  private data: TodoItem[] = [
    { id: '3', description: 'Sell Stuff', completed: false },
    { id: '4', description: 'Learn Piano More Better', completed: true }
  ];
  id = 4;
  constructor() {

    this.subject = new BehaviorSubject<TodoItem[]>(this.data);
  }

  getTodos(): Observable<TodoItem[]> {
    return this.subject.asObservable();
  }

  addTodoItem(description: string) {
    this.id++;
    const newItem: TodoItem = {
      id: this.id.toString(),
      description,
      completed: false
    };
    this.data = [newItem, ...this.data];
    this.subject.next(this.data);
  }

  markComplete(item: TodoItem) {
    const originalItem = this.data.find(d => d.id === item.id);
    originalItem.completed = true;
    this.subject.next(this.data);
  }
}
