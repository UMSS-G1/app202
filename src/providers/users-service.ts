import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  users: string[] = [
    'user1',
    'user2',
    'user3',
    'user5',
    'user5',
    'user6',
    'user7',
  ];

  constructor(
    public http: Http
  ) {
    console.log('Hello UsersService Provider');
  }

  getAll(){
    return this.http.get('https://randomuser.me/api/?results=50')
    .map(response => response.json())
    .toPromise();
  }

  checkUsername(username: string){
     return this.users.indexOf(username);
  }

}
