import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
    @Input() todo : Todo;
    @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
    @Output() todoCheck:EventEmitter<Todo> = new EventEmitter();
    constructor(){
      this.todo = new Todo();
    }
    OnClick(todo:Todo){
      this.todoDelete.emit(todo);
      console.log("Delete has been Triggered");
    }
    Oncheck(todo:Todo){
      this.todoCheck.emit(todo);
    }
}
