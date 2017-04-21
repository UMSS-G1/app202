import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsersService } from '../../providers/users-service';
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
    public formBuilder: FormBuilder,
    public usersService: UsersService
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

  clickPromise(){
    /*this.validateUserName()
    .then(data =>{
      console.log(data);
    })
    .catch(error=>{
      console.error(error);
    })
    */
  }

  validateUserName(control: FormControl){
    /*version 1
    let promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve("todo salio bien");
      }, 10000);
    });
    return promise;
    */
    /*
    return new Promise((resolve, reject)=>{
      //code de la data
      setTimeout(()=>{
        resolve("todo salio bien");
      }, 10000);
    });*/
    let username = control.value;
    return new Promise((resolve, reject)=>{
      //code de la data
      let result = this.usersService.checkUsername(username);
      if(result === -1){
        reject("no encontrado");
      }else{
        resolve("el usuario ya esta");
      }
    });
  }

}
