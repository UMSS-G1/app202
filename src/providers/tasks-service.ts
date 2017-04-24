import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TasksService {

  url: string = 'http://jsonplaceholder.typicode.com/todos';

  constructor(
    public http: Http
  ) {}

  getAll(){
    return this.http.get(this.url)
    .map(response => response.json())
    .toPromise();
  }

  create(task: any){
    let body = JSON.stringify(task);
    return this.http.post(this.url, body)
    .map(response => response.json())
    .toPromise();
  }

}
