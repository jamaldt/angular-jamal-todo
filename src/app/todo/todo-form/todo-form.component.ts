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
  taskValue: string = "";
  items:any;
  
  
  constructor( private todoService:TodoService) {
    this.newTodo = '';
      this.todos = [];
   }

  ngOnInit() {
  }


  saveTodo(newTodo: string) {
    if (newTodo) {
      this.todos.push(newTodo);
      this.newTodo = '';
    }
  }

  add(newtodo: string) : boolean {
    this.todos.push(newtodo);
    this.newTodo = '';
    return false;
    }
  
    remove(i: string) : void {
      var index = this.todos.indexOf(name, 0);
      if (index !== undefined) {
         this.todos.splice(index, 1);
      }
    }
}