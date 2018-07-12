import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import { Task } from '../model/task';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private list: Array<Task> = [];
  // private listDone: Array<Task> = [];

  private listObs = new BehaviorSubject<Array<Task>>([]);
  // private listDoneObs = new BehaviorSubject<Array<Task>>([]); niepotrzebne bo jest isDone

  constructor(private http: HttpClient) {
    this.list = [
      {name: 'kasia', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true},
      {name: 'basie', created: new Date().toLocaleString(), isDone: false},
      {name: 'stasia', created: new Date().toLocaleString(), isDone: false},
      {name: 'kuba', created: new Date().toLocaleString(), isDone: false},
      {name: 'kajtek', created: new Date().toLocaleString(), isDone: false},
    ];
    this.listObs.next(this.list);
  }
  add(el: Task) {
    this.list.push(el);
    this.listObs.next(this.list);
  }
  remove(el: Task) {
    this.list = this.list.filter(e => e !== el);
    this.listObs.next(this.list);
  }
  done(el: Task) {
    el.end = new Date().toLocaleString();
    // this.listDone.push(el);
    // this.listDoneObs.next(this.listDone);
    this.remove(el);
  }
  getList(): Observable<Array<Task>> {
    return this.listObs.asObservable();
  }

}
