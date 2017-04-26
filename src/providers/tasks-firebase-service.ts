import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

@Injectable()
export class TasksFirebaseService {

  tasks:FirebaseListObservable<any>;

  constructor(
    public firebaseDatabase: AngularFireDatabase
  ) {
    this.tasks = this.firebaseDatabase.list('/tasks');
  }

  create(task: any){
    return this.tasks.push(task);
  }

  getAll(){
    return this.tasks;
  }

}
