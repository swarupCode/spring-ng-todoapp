import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(public id : number,
              public description: string,
              public done: boolean,
              public targetDate: Date){}
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn Python', false, new Date()),
    new Todo(2, 'Learn Java', true, new Date()),
    new Todo(3, 'Learn Scala', false, new Date()),
    new Todo(4, 'Learn Guitar', false, new Date())
  ]
  todo1 = new Todo(1, 'Learn Python', false, new Date())
  constructor() { }

  ngOnInit(): void {
  }

}
