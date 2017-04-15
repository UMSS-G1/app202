import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tasks-done',
  templateUrl: 'tasks-done.html',
})
export class TasksDonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksDone');
  }

  goToTutorialPage(){
    this.navCtrl.push('TutorialPage');
  }

}
