import { Task } from './../model/task';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private headers = new HttpHeaders().set('Authorisation', 'token');
  private params = new HttpParams().set('apiKey', 'oPIcl_-NUPevHxWtSFjKl3o8Tz1cTaQd');
  readonly url = 'https://api.mlab.com/api/1/databases/angular_db/collections/tasks';

  constructor(private htttp: HttpClient) {
    this.getApiInfo();
   }
  getApiInfo(): Observable<any> {
    return this.htttp.get<Array<Task>>(this.url, {params: this.params});
  }
  saveTask(list: Array<Task>) {
    this.htttp.put(this.url, list, {params: this.params}).subscribe(data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => console.log(error));
  }







  //get => pobranie danych
  getInfo(): Observable<any> {
    return this.htttp.get(this.url,
  {params: this.params, responseType: 'json'});
  }
  getDetails(url: string, id: string): Observable<any>  {
    return this.htttp.get(url + id, { headers: this.headers});
  }
  getParams(url: string, ...Params): Observable<any> {
    return this.htttp.get(url + Params, {responseType: 'text'});
  }
  setParams(url, userId: number): Observable<any> {
    // '' zeby stworzyc string z parametru ktory jest numberem => params stringiem musza byc
    const param = new HttpParams().set('userId', userId + '');
    return this.htttp.get(url, {params: param});
  }
  //post => dodanie danych
  post(url, post): Observable<any> {
    return this.htttp.post(url, post);
  }

  // put => => podmiana danych lub stworzenie nowego, sciezka, id gdzie to podmienic i po przecinku co podmienic
  put(url, put): Observable<any> {
    // return this.htttp.put(url + 1, put);
    return this.htttp.put(url + put.userId, put);
  }

  //delete
  delete(url, id: number): Observable<any> {
    return this.htttp.delete(url + id);
  }

  //patch zmienia okreslona wartosc obiektu
  patch(url, put) {
    return this.htttp.put(url + put.id, put);
  }

  //interceptor kontrolowanie zapytan wychodzacych do backendu, pozwalaja przechwycic, zmienic i dopiero wyslac na backend
}
