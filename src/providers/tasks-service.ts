import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TasksService {

  constructor(
    public http: Http
  ) {}

  getAll(){
    return this.http.get('http://jsonplaceholder.typicode.com/todos')
    .map(response => response.json())
    .toPromise();
  }

}
