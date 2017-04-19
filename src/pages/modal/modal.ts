import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Modal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class Modal {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    console.log(this.navParams.get('id'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal');
  }

  closeWithData(){
    this.viewCtrl.dismiss({
      name: 'asas'
    });
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
