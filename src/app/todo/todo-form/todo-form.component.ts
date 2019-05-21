import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor( private todoService:TodoService) { }

  ngOnInit() {
  }

  todos = [];
  createMode: boolean = true;
  saveTodo(newTodo: string) {
    if (newTodo) {
      this.todos.push(newTodo);
    }
  }

  checkedDone(index: number) {
    const newDoneValue = !this.todos[index].done
    this.todos[index].done = newDoneValue;
    const obj = { done: newDoneValue };
    const id = this.todos[index].id
    this.todoService.editTodoPartial(id, obj);
  }
}
