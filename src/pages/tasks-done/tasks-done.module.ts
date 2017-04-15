import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksDonePage } from './tasks-done';

@NgModule({
  declarations: [
    TasksDonePage,
  ],
  imports: [
    IonicPageModule.forChild(TasksDonePage),
  ],
  exports: [
    TasksDonePage
  ]
})
export class TasksDoneModule {}
