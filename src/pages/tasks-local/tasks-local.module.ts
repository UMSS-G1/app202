import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksLocalPage } from './tasks-local';

@NgModule({
  declarations: [
    TasksLocalPage,
  ],
  imports: [
    IonicPageModule.forChild(TasksLocalPage),
  ],
  exports: [
    TasksLocalPage
  ]
})
export class TasksLocalModule {}
