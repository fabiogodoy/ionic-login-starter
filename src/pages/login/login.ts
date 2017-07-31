import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AppTranslationModule } from '../../app/app.translation.module';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[AppTranslationModule]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public translate: AppTranslationModule) {

  }

  login(){
    this.navCtrl.push(TabsPage, {}, {animate: false});
  }

}