import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  
  createMode: boolean = true;
  newTodo: string;
  todos: any;
  todoObj: any;
  constructor( private todoService:TodoService) {
    this.newTodo = '';
      this.todos = [];
   }

  ngOnInit() {
  }

  
  saveTodo(newTodo: string) {
    if (newTodo) {
      this.todos.push(newTodo);
    }
  }
  add(newtodo: string) : boolean {
    this.todos.push(newtodo);
    return false;
    }
  
    remove(i: string) : void {
      var index =i;
      if (index !== undefined) {
         this.todos.splice(index, 1);
      }
    }
}
