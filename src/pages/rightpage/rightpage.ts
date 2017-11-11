import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Login } from '../login/login';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ViewController } from 'ionic-angular';

import * as firebase from 'firebase';


@Component({
    selector: 'page-rightpage',
    templateUrl: 'rightpage.html'
})
export class RightPage {
    swipe: number=0;
    constructor(private menu: MenuController, public navCtrl: NavController, private _auth: AuthService, public af: AngularFire, public viewCtrl: ViewController) {
       
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}