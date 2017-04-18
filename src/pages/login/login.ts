import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    let load = this.loadCtrl.create({
      content: 'estoy cargando los datos'
    });
    load.present();
    setTimeout(()=>{
      load.dismiss();
    }, 5000);
    load.onDidDismiss(()=>{
      console.log("el load se ha cerrado");
    });
  }

  showToast(){
    let toast = this.toastCtrl.create({
      message: 'Felicitaciones has ganado',
      showCloseButton: true,
      closeButtonText: 'Omitir',
      duration: 10000,
      position: 'middle'
    });
    toast.present();
    toast.onDidDismiss(()=>{
      console.log('el toast se ha cerrado');
    });
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Cuidado!',
      message: 'La bateria esta baja',
      buttons: ['OK']
    });
    alert.present();
  }

  showConfirm(){
    let alert = this.alertCtrl.create({
      title: '¿Esta seguró?',
      message: 'se borrara permanentemente el arhivo',
      buttons: [
        {
          text: 'Si, estoy seguró',
          handler: ()=>{
            console.log('si lo estoy');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            console.log('cancelar');
          }
        }
      ]
    });
    alert.present();
  }

  goToHomePage(){
    this.navCtrl.setRoot('HomePage');
  }

}
