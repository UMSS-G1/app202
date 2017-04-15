import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, 'menu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

}
