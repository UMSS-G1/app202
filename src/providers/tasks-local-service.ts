import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class TasksLocalService {

  key: string = 'tasks';

  constructor(
    public storage: Storage
  ) {
    console.log('Hello TasksLocalService Provider');
  }

  saveTasks(tasks: any[]){
    return this.storage.set(this.key, JSON.stringify(tasks));
  }

  getTasks(){
    return this.storage.get(this.key)
    .then(data =>{
      if(data === null) {
        return Promise.reject('la data es null');
      }
      return Promise.resolve(JSON.parse(data));
    })
    .catch(error => Promise.reject(error));
  }

}
