import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AppTranslationModule } from '../../app/app.translation.module';

@Component({
  templateUrl: 'tabs.html',
  providers:[AppTranslationModule]
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public translate: AppTranslationModule) {

  }
}
