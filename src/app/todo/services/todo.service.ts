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
 
  deleteTodoById(id: number): TodoService {
    const index = this.todos.findIndex(todo => todo.id == id)
    this.todos.splice(index,1);
      ///.filter(todo => todo.id !== id);
    return this;
  }

  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.todos[todo.id].id
    return updatedTodo;
  }
  
  getAllTodos(): Todo[] {
    return this.todos;
  }
}
