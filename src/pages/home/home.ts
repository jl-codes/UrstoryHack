import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Login } from '../login/login';
import { LeftPage } from '../leftpage/leftpage';
import { RightPage } from '../rightpage/rightpage';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import * as firebase from 'firebase';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class Home {
    swipe: number=0;
    constructor(private menu: MenuController, public navCtrl: NavController, private _auth: AuthService, public af: AngularFire) {
       
    }
    swipeEvent(e) {
        this.swipe++

        if (e.direction == 4) {
            this.navCtrl.push(LeftPage, {}, {animate: true, direction: 'back'});
        }
        if(e.direction == 2){
            this.navCtrl.push(RightPage, {}, {animate: true, direction: 'forward'});
        }
      }
}