import {retry} from 'rxjs/internal/operators';
import { HttpService } from './services/http.service';
import { AddTaskComponent } from './add-task/add-task.component';
import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jsonList$: Observable<any>;
  asyncList$: Observable<any>;

  constructor(private service: HttpService) {
    this.service.getInfo().subscribe(data => {
      this.jsonList$ = data;
    },
    (error: HttpErrorResponse) => console.log(error.message)
  );
    this.asyncList$ = this.service.getInfo();
    this.service.getDetails('https://jsonplaceholder.typicode.com/posts/', '1').subscribe(data => {
      // console.log(data);
    });
    this.service.getParams('https://jsonplaceholder.typicode.com/posts', '?userId=' + '1').subscribe(data => {
      // console.log(data);
    });
    this.service.setParams('https://jsonplaceholder.typicode.com/posts', 1).subscribe(data => {
      // console.log(data);
    });
    //post
    this.service.post('https://jsonplaceholder.typicode.com/posts', {userId: 2, id: null, title: 'Moje', body: 'Moje, moje'})
    .subscribe(data => {
      // console.log(data);
    });
    //put
    this.service.put('https://jsonplaceholder.typicode.com/posts/', {userId: 2, id: 2, title: 'Moje', body: 'Moje, Twoje'})
    .subscribe(data => {
      // console.log(data);
    });
    //delete
    // this.service.delete('https://jsonplaceholder.typicode.com/posts/', 1)
    // .subscribe(data => {
    //   console.log(data);
    // });
    //patch - update'uje pola a nie nadpisuje jak post
    this.service.patch('https://jsonplaceholder.typicode.com/posts/', {userId: 2, id: 2, title: 'Moje', body: 'Test'})
    .subscribe(data => {
      // console.log(data);
    },
    (error: HttpErrorResponse) => console.log(error.status)
  );
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
