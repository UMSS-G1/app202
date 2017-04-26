import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


import { TasksSqlService } from '../../providers/tasks-sql-service';


@IonicPage()
@Component({
  selector: 'page-tasks-sql',
  templateUrl: 'tasks-sql.html',
})
export class TasksSqlPage {

  tasks: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tasksService: TasksSqlService,
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

  private createTask(title: string){
    let newTask: any = {
      title: title,
      completed: false
    };
    this.tasksService.create(newTask)
    .then(data =>{
      newTask.id = data.insertId;
      this.tasks.unshift( newTask );
    })
    .catch(error =>{
      console.error(error);
    });
  }

}
