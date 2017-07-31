
import { NavController, App } from "ionic-angular";

export class HasLogout {

    constructor(public navCtrl: NavController, public app: App) {

    }

    logout():void {
        console.log('chamou');
        // Remove API token 
        const root = this.app.getRootNav();
        root.popToRoot();
    }

}