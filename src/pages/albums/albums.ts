import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlbumsService } from '../../providers/albums-service';

@IonicPage()
@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html',
})
export class AlbumsPage {

  albums: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public albumsService: AlbumsService
  ) {}

  ionViewDidLoad() {
    this.albums = this.albumsService.getAll();
  }

  goToGalleryPage( album ){
    this.navCtrl.push('GalleryPage', {
      album: album,
    });
  }

}
