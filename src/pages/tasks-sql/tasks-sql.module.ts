import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksSqlPage } from './tasks-sql';

@NgModule({
  declarations: [
    TasksSqlPage,
  ],
  imports: [
    IonicPageModule.forChild(TasksSqlPage),
  ],
  exports: [
    TasksSqlPage
  ]
})
export class TasksSqlModule {}
