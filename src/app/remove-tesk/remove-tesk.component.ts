import { TaskServiceService } from './../services/task-service.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-remove-tesk',
  templateUrl: './remove-tesk.component.html',
  styleUrls: ['./remove-tesk.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RemoveTeskComponent implements OnInit {

  list: Array<Task>;

  constructor(private service: TaskServiceService) {
    this.service.getList().subscribe(data => {
      this.list = data.filter(res => res.isDone !== true);
      // zeby Angular stworzyl nowa referencje, mogl zareagowac na modyfikacje nowych (dodanych) elementow
      this.list = [...this.list];
    });
   }

  ngOnInit() {
  }
  done(el: Task) {
    this.service.done(el);
}
  remove(el: Task) {
    this.service.remove(el);
  }
  getColor(): string {
    return this.list.length > 1 ? 'green' : 'red';
  }
}
