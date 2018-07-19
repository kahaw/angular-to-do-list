import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import { Task } from '../model/task';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  // private listDone: Array<Task> = [];

  private listObs = new BehaviorSubject<Array<Task>>([]);
  // private listDoneObs = new BehaviorSubject<Array<Task>>([]); niepotrzebne bo jest isDone

  constructor(private http: HttpClient, private service: HttpService) {
      this.service.getApiInfo().subscribe(data => {
        this.listObs.next(data);
      });
  }
  add(el: Task) {
    const list = this.listObs.getValue();
    list.push(el);
    this.listObs.next(list);
  }
  remove(el: Task) {
    const list = this.listObs.getValue().filter(e => e !== el);
    this.listObs.next(list);
  }
  done(el: Task) {
    el.end = new Date().toLocaleString();
    el.isDone = true;
    const list = this.listObs.getValue();
    this.listObs.next(list);
  }
  showTask() {
  }
  getList(): Observable<Array<Task>> {
    return this.listObs.asObservable();
  }
  saveTaskInDb() {
    this.service.saveTask(this.listObs.getValue());
  }
}
