import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  image: string = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public camera: Camera
  ) {
    this.menuCtrl.enable(false, 'menu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tutorial');
  }


  takePicture(){
    //this.image = 'http://www.nicobytes.com/images/photo.jpg';
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      targetWidth: 500,
      targetHeight: 500
    }
    this.camera.getPicture( options )
    .then(imageBase64 =>{
      this.image = 'data:image/jpeg;base64,' + imageBase64;
    })
    .catch(error =>{
      console.error( error );
    });
  }

  goToLoginPage(){
    this.navCtrl.push('LoginPage');
  }

  goToRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }

}
