import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TasksLocalService } from '../../providers/tasks-local-service';


@IonicPage()
@Component({
  selector: 'page-tasks-local',
  templateUrl: 'tasks-local.html',
})
export class TasksLocalPage {

  tasks: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tasksService: TasksLocalService,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    this.tasksService.getTasks()
    .then(data=>{
      this.tasks = data;
    })
    .catch(error =>{
      console.error(error);
    });
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Crear tarea',
      message: 'Digite la nueva tarea',
      inputs: [
        {
          type: 'text',
          name: 'title',
        },
      ],
      buttons: [
        {
          text: 'Guardar',
          handler: (data)=>{
            this.createTask(data.title);
          }
        },
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: ()=>{
            console.log('cancelar');
          }
        }
      ]
    });
    alert.present();
  }

  showAlertEdit( task: any, position: number ){
    let alert = this.alertCtrl.create({
      title: 'Crear tarea',
      message: 'Digite la nueva tarea',
      inputs: [
        {
          type: 'text',
          name: 'title',
          value: task.title
        },
      ],
      buttons: [
        {
          text: 'Guardar',
          handler: (data)=>{
            //task.title = data.title;
            let copyTask = Object.assign({}, task);
            copyTask.title = data.title;
            this.updateTask(copyTask, position);
          }
        },
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: ()=>{
            console.log('cancelar');
          }
        }
      ]
    });
    alert.present();
  }

  private createTask(title: string){
    let newTask: any = {
      title: title,
      completed: false
    };
    this.tasks.unshift( newTask );
    this.tasksService.saveTasks(this.tasks);
  }

  private updateTask(task: any, position: number){
    this.tasks[position] = task;
    this.tasksService.saveTasks(this.tasks);
  }

}
