import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppTranslationModule } from '../../app/app.translation.module';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers:[AppTranslationModule]
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: AppTranslationModule) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
