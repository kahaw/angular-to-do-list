import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import { Task } from '../model/task';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  // private listDone: Array<Task> = [];

  private listObs = new BehaviorSubject<Array<Task>>([]);
  // private listDoneObs = new BehaviorSubject<Array<Task>>([]); niepotrzebne bo jest isDone

  constructor(private http: HttpClient) {
    const list = [
      {name: 'kasia', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true},
      {name: 'basie', created: new Date().toLocaleString(), isDone: false},
      {name: 'stasia', created: new Date().toLocaleString(), isDone: false},
      {name: 'kuba', created: new Date().toLocaleString(), isDone: false},
      {name: 'kajtek', created: new Date().toLocaleString(), isDone: false},
    ];
    this.listObs.next(list);
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
  getList(): Observable<Array<Task>> {
    return this.listObs.asObservable();
  }

}
