import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, ActionSheetController, ModalController, PopoverController } from 'ionic-angular';

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
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController
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

  showPrompt(){
    let alert = this.alertCtrl.create({
      title: 'Crear tarea',
      message: 'Digite la nueva tarea',
      inputs: [
        {
          type: 'text',
          name: 'title',
        },
        {
          type: 'password',
          name: 'password'
        }
      ],
      buttons: [
        {
          text: 'Guardar',
          handler: (data)=>{
            console.log(data);
          }
        },
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: ()=>{
            console.log('cancelar');
          }
        }
      ]
    });
    alert.present();
  }

  showActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opciones',
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          handler: ()=>{
            console.log('share');
          }
        },
        {
          text: 'Elimnar',
          role: 'destructive',
          handler: ()=>{
            console.log('delete');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            console.log('cancel');
          }
        }
      ]
    });
    actionSheet.present();
  }

  openModal(){
    let modal = this.modalCtrl.create('Modal', {
      id: 1
    });
    modal.present();
    modal.onDidDismiss(data=>{
      console.log(data);
    });
  }

  openPopover(event){
    let popover = this.popoverCtrl.create('Popover');
    popover.present({
      ev: event
    });
  }

  goToHomePage(){
    this.navCtrl.setRoot('HomePage');
  }

}
