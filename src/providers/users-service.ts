import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';

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

  constructor() {
    console.log('Hello UsersService Provider');
  }

  checkUsername(username: string){
     return this.users.indexOf(username);
  }

}
