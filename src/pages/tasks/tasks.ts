import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
    public tasksService: TasksService,
    public alertCtrl: AlertController
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

  showAlertDelete( task: any, position: number ){
    let alert = this.alertCtrl.create({
      title: '¿Parce estás seguro?',
      message: 'La tarea se eliminara por completo',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            console.log('cancelar');
          }
        },
        {
          text: 'Si, estoy seguro',
          handler: ()=>{
            this.deleteTask(task, position);
          }
        },
      ]
    });
    alert.present();
  }

  private createTask(title: string){
    let newTask: any = {
      title: title,
      completed: false
    };
    this.tasksService.create(newTask)
    .then(data =>{
      newTask.id = data.id;
      this.tasks.unshift( newTask );
    })
    .catch(error =>{
      console.error(error);
    });
  }

  private updateTask(task: any, position: number){
    this.tasksService.update(task)
    .then(data =>{
      this.tasks[position] = task;
    })
    .catch(error =>{
      console.error(error);
    });
  }

  private deleteTask(task: any, position: number){
    this.tasksService.delete(task.id)
    .then(data =>{
      this.tasks.splice(position, 1);
    })
    .catch(error =>{
      console.error(error);
    });
  }

}
