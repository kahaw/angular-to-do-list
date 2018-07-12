import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from '../services/task-service.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  inputs: string;

  constructor(private service: TaskServiceService) {
   }

  ngOnInit() {
  }

  add() {
    const task: Task = {name: this.inputs, created: new Date().toLocaleString(), isDone: true};
    this.service.add(task);
    this.inputs = '';
  }

}
