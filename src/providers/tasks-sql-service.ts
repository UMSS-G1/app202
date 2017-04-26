import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class TasksSqlService {

  database: SQLiteObject = null;

  constructor() {
    console.log('Hello TasksSqlService Provider');
  }

  createTable(){
    let sql = "CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT,  completed INTEGER)";
    return this.database.executeSql(sql, []);
  }

  setDatabase(db){
    if(this.database === null){
      this.database = db;
    }
  }

  getAll(){
    let sql = 'SELECT * FROM tasks';
    return this.database.executeSql(sql, [])
    .then(response =>{
      let tasks = [];
      for(let i = 0; i < response.rows.length; i++){
        tasks.push(response.rows.item(i));
      }
      return Promise.resolve( tasks );
    })
    .catch(error=> Promise.reject(error));
  }

  create(task: any){
    let sql = 'INSERT INTO tasks(title, completed) VALUES(?,?)';
    return this.database.executeSql(sql,[task.title, task.completed]);
  }

}
