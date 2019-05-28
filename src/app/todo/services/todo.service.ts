import { Injectable } from '@angular/core';
import { AngularFirestore,DocumentReference  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { TodoViewModel } from '../models/todo-view-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];
  lastId: number = 0;
  constructor() { }

  private todoCollectionName ='todos';

  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }
 
}
