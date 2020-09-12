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
    private utils: UtilsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
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

    });
  }
}
