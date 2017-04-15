import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html',
})
export class ButtonsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Buttons');
  }

}
