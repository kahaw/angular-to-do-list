import { Component, OnInit, Input } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-finished-task',
  templateUrl: './finished-task.component.html',
  styleUrls: ['./finished-task.component.css']
})
export class FinishedTaskComponent implements OnInit {
  listDone: Array<Task>;
  constructor(private service: TaskServiceService) {
    this.service.getList().subscribe(data => {
      this.listDone = data.filter(res => res.isDone === true);
    });
   }

  ngOnInit() {
  }

}
