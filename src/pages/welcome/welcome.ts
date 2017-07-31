import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { AppTranslationModule } from '../../app/app.translation.module';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  providers:[AppTranslationModule]
})
export class WelcomePage {
  constructor(public navCtrl: NavController, public translate: AppTranslationModule) {
  }

  login(){
  this.navCtrl.push(LoginPage);
  }

  signup(){
  this.navCtrl.push(SignupPage);
  }
}