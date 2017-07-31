import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { HasLogout } from "../abstract/haslogout";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage extends HasLogout{

  constructor(public navCtrl: NavController, public app: App) {
    super(navCtrl, app)

  }

}
