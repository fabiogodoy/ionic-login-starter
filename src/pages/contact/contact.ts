import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { HasLogout } from "../abstract/haslogout";
import { AppTranslationModule } from '../../app/app.translation.module';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers:[AppTranslationModule]
})
export class ContactPage extends HasLogout{

  constructor(public navCtrl: NavController, public app: App, public translate: AppTranslationModule) {
    super(navCtrl, app)

  }

}
