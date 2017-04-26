import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TasksFirebaseService } from '../../providers/tasks-firebase-service';
import { FirebaseListObservable  } from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-tasks-firebase',
  templateUrl: 'tasks-firebase.html',
})
export class TasksFirebasePage {

  tasks:FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tasksService: TasksFirebaseService,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    this.tasks = this.tasksService.getAll();
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

  private createTask(title: string){
    let newTask: any = {
      title: title,
      completed: false
    };
    this.tasksService.create(newTask);
  }

}
