import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { RestService } from './service/rest.service';
import { UtilsService } from './service/utils.service';
import { interval, timer } from 'rxjs';
import { startWith, takeWhile } from 'rxjs/operators';
import { start } from 'repl';
import { Storage } from '@ionic/storage';
import { CodePush,InstallMode } from '@ionic-native/code-push/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private rest: RestService,
    private utils: UtilsService,
    private codePush: CodePush
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {

      // Update app by codePush
      this.checkCodePush();

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Set default language 
      var lang = await this.utils.getKey('lang');
      if (lang != null) {
        this.translate.setDefaultLang(lang);
      }
      else {
        this.translate.setDefaultLang('fr');
      }
      // Get no readed message every minute 
      timer(0, 60000).subscribe(() => { // ms
        if (localStorage.getItem('userId') != null) {
          this.rest.GetNoReadMessageCount({ UserId: localStorage.getItem('userId') }).subscribe(result => {
            if (result != null) {
              // TODO: Migration to rxjs subscriber 
              // this.event.publish('message:new', result);
              this.utils.newMessageNumberSubject.next(result);
            }
          });
        }
      });

      // check if is logined 
      var token = localStorage.getItem('jwt');
      var userId = localStorage.getItem('userId');
      if(token!= null && userId!= null ){
        this.utils.isLoginedSubject.next(true);
      }
      else{
        this.utils.isLoginedSubject.next(false);
      }
    });
  }

  checkCodePush() {
    this.codePush.sync({
      installMode: InstallMode.ON_NEXT_RESTART
    }).subscribe(
    (data) => {
     console.log('CODE PUSH SUCCESSFUL: ' + data);
    },
    (err) => {
     console.log('CODE PUSH ERROR: ' + err);
    }
  );
 }
}
