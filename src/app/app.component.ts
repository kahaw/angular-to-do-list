import {retry} from 'rxjs/internal/operators';
import { HttpService } from './services/http.service';
import { AddTaskComponent } from './add-task/add-task.component';
import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskServiceService } from './services/task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jsonList$: Observable<any>;
  asyncList$: Observable<any>;

  constructor(private service: HttpService, private serviceTask: TaskServiceService) {
    this.service.getInfo().subscribe(data => {
      this.jsonList$ = data;
    },
    (error: HttpErrorResponse) => console.log(error.message)
  );
  }
save() {
  this.serviceTask.saveTaskInDb();
}






  // list: Array<string> = [];
  // listDone: Array<string> = [];
  // inputs: string;

  // @ViewChild('local') local: AddTaskComponent;

  // ngOnInit() {
  //   this.list = ['zad1', 'zad2'];
  // }
  // ngOnChanges() {
  //   this.local.add();
  // }

  // remove(el: string) {
  //   this.list = this.list.filter(e => e !== el);
  // }
  // done(el: string) {
  //   this.listDone.push(el);
  //   this.remove(el);
  // }
}
