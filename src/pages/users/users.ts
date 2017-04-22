import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { UsersService } from '../../providers/users-service';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usersService: UsersService,
    public loadCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    let load = this.loadCtrl.create();
    load.present();
    this.usersService.getAll()
    .then(data =>{
      this.users = data.results;
      load.dismiss();
    })
    .catch(error =>{
      load.dismiss();
      console.error(error);
    });
  }

}
