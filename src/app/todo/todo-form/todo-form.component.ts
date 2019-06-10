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
  newTodo: Todo = new Todo();
  todos: any;
  items:any;
  
  constructor( private todoService:TodoService) {
     }

  ngOnInit() {
    this.loadAllTodoList();
  }

  loadAllTodoList() {
    this.todos = this.todoService.getAllTodos();
  }

  add(){
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
    }

  remove(todo): void {
    this.todoService.deleteTodoById(todo.id)
  }
/*
  remove(todoId: number, index: number) : void {
    this.todoService.deleteTodoById(todoId)
      .then(() => {
        this.todos.splice(index, 1);
      })
      .catch(err => console.error(err));
  }
 */
  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }
}