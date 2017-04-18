import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  album: any = {};
  gallery: any[] = [];
  backupGallery: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.album = this.navParams.get('album');
    this.backupGallery = this.gallery = this.album.gallery;
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

  search( event ){
    if(event.target.value !== undefined && 
      event.target.value !== null && 
      event.target.value !== ''){
        let query = event.target.value;
        this.gallery = this.backupGallery.filter(item =>{
          return item.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1;
        });
    }else{
      this.gallery = this.backupGallery;
    }
  }

}
