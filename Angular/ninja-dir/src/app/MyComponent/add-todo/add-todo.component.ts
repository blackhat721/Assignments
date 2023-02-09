import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo'
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})


export class AddTodoComponent implements OnInit {
  Name: string
  Desc: string
  // @Input() todo : Todo;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() {
    this.Name = "";
    this.Desc = "";
    // this.todo = new Todo();
  }
  ngOnInit(): void {

  }
  Onsubmit() {
    const todo = new Todo();
    todo.Name = this.Name;
    todo.desc = this.Desc;
    todo.s_no = 5;
    todo.active = true;
    const td = { s_no: 5, Name: this.Name, Desc: this.Desc, active: false };
    console.log("hello");
    console.log(this.Name);
    console.log(td.Desc)
    this.todoAdd.emit(todo);

  }
}
