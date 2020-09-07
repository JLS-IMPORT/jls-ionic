import { Component, OnInit } from '@angular/core';
import { BaseUI } from '../common/baseui';
import { NavController, LoadingController, ToastController, ModalController } from '@ionic/angular';
import { RestService } from '../service/rest.service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseUI {
  email: string;
  password: string;
  errorMessage: any;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public rest: RestService,
    public toastCtrl: ToastController,
    public storage: Storage,
    public modalCtrl: ModalController,
    public network: Network,
    public translateService: TranslateService
  ) {
    super();
  }

  ngOnInit() {
  }


  async login() {
    // this.viewCtrl.dismiss();

    if (this.network.type != 'none') {
      var loading = await this.showLoading(this.loadingCtrl, this.translateService.instant("Loading"));
      var LoginInfo = {
        Email: this.email,
        Password: this.password
      };


      // this.navCtrl.parent.select(0); // 跳转tabs
      this.rest.getNewRefreshToken(LoginInfo) // 填写url的参数
        .subscribe(
          f => {


            if (f != null && f.authToken != null) {
              localStorage.setItem('login  Status', '1');
              localStorage.setItem('jwt', f.authToken.token);
              localStorage.setItem('username', f.authToken.username);
              localStorage.setItem('userId', f.authToken.userId);
              localStorage.setItem('expiration', f.authToken.expiration);
              localStorage.setItem('userRole', f.authToken.roles);
              localStorage.setItem('refreshToken', f.authToken.refresh_token);
              //this.router.navigate(['sample']);


              this.storage.set('userId', f.authToken.userId);
              this.storage.set('jwt', f.authToken.token);
              this.storage.set('refreshToken', f.authToken.refresh_token);

              this.modalCtrl.dismiss();
            }

            loading.dismiss();
          },
          error => {
            var message = JSON.parse(error);
            if (message.LoginError != null) {
              super.showToast(this.toastCtrl, this.translateService.instant(message.LoginError));
            }
            else {
              super.showToast(this.toastCtrl, this.translateService.instant("Msg_Error"));
            }

            loading.dismiss();
          });
    }
    else {
      this.loadingCtrl, this.translateService.instant("Msg_Offline")
    }
  }

  registre() {

    // this.appCtrl.getRootNavs()[0].push('RegistrePage');
    //todo migration 
    // this.viewCtrl.dismiss();
    // this.appCtrl.getRootNav().push('RegistrePage');
  }

  findOutPassword() {
    this.modalCtrl.dismiss();
    //todo migration 
    //this.appCtrl.getRootNav().push('ForgetPasswordPage');
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
