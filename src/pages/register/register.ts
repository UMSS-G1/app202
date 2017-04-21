import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MyValidators } from '../../validators/validators';

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
      nickname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      email: ['',[Validators.required, Validators.email]],
      lastname: [''],
      username: [''],
      passwordGroup: this.formBuilder.group({
        password: ['',[Validators.required, Validators.minLength(6)]],
        confirmPassword: ['',[Validators.required, Validators.minLength(6)]],
      },{
        validator: MyValidators.matchPassword
      }),
      age: ['', [Validators.required, MyValidators.isYoung]],
      phone: [''],
      date: [''],
      bio: [''],
      chontaduro: [false],
      fresa: [false],
      borojo: [false],
      uchuva: [false],
      genero: [''],
      anirversary: [''],
      children: [''],
      movies: [''],
      mail: [false],
    });

    let obj = {
      name: 'nicolas',
      mail: true,
      genero: 'M',
      children: 9
    }

    this.loginForm.patchValue( obj );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  goToHomePage(){
    this.navCtrl.setRoot('HomePage');
  }

  saveData(){
    console.log(this.data);
    console.log(this.loginForm.value);
  }

}
