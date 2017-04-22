import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TasksService } from '../../providers/tasks-service';

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  tasks: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tasksService: TasksService
  ) {
  }

  ionViewDidLoad() {
    this.tasksService.getAll()
    .then(data=>{
      this.tasks = data;
    })
    .catch(error =>{
      console.error(error);
    });
  }

}
