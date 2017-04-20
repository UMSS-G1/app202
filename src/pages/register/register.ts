import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  data: any = {};
  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      name: ['nicolas'],
      lastname: ['molina'],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  goToHomePage(){
    this.navCtrl.setRoot('HomePage');
  }

  saveData(){
    console.log(this.data);
  }

}
