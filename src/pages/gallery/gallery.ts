import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  album: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.album = this.navParams.get('album');
    // let id = this.navParams.get('id');
    // console.log(id);
    // let state = this.navParams.get('state');
    // console.log(state);
    // let imgs = this.navParams.get('imgs');
    // console.log(imgs);
    // let user = this.navParams.get('user');
    // console.log(user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gallery');
  }

}
