import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: string = 'TasksPage';
  tab2: string = 'TasksDonePage';
  index: string = '0';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.index = this.navParams.get('index');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }

}
