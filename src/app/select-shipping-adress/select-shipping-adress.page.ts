import { Component, OnInit } from '@angular/core';
import { BaseUI } from '../common/baseui';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { UtilsService } from '../service/utils.service';
import { RestService } from '../service/rest.service';
import { Network } from '@ionic-native/network/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-shipping-adress',
  templateUrl: './select-shipping-adress.page.html',
  styleUrls: ['./select-shipping-adress.page.scss'],
})
export class SelectShippingAdressPage extends BaseUI {


  selectedAdressId: number;
  adressList: any[] = [];


  constructor(
    public navCtrl: NavController,
    public network: Network,
    public toastCtrl: ToastController,
    public rest: RestService,
    public utils: UtilsService,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public translateService: TranslateService,
    public router: ActivatedRoute
  ) {
    super();
  }

  async ngOnInit() {
    if (this.network.type != 'none') {
      var loading = await super.showLoading(this.loadingCtrl, this.translateService.instant("Loading"));
      var userId = await this.utils.getKey('userId');
      this.rest.GetUserShippingAdress(userId) // 填写url的参数
        .subscribe(
          f => {
            if (f.Success && f.Data != null) {
              this.adressList = f.Data;
              if (this.router.snapshot.queryParams['CurrentAddressId'] != null && this.router.snapshot.queryParams['CurrentAddressId'] > 0) {
                this.selectedAdressId = this.router.snapshot.queryParams['CurrentAddressId'];
              }
              console.log(f.Data); // todo remove
            } else {
              super.showToast(this.toastCtrl, this.translateService.instant("Msg_Error"));
            }

            loading.dismiss();
          },
          error => {
            super.showToast(this.toastCtrl, this.translateService.instant("Msg_Error"));
            loading.dismiss();
          });
    }
    else {
      super.showToast(this.toastCtrl, this.translateService.instant("Msg_Offline"));
    }
  }

  ionViewDidEnter() {
    if (this.router.snapshot.queryParams['type'] != null) {
      var userId = localStorage.getItem('userId');

      this.rest.GetUserShippingAdress(userId) // 填写url的参数
        .subscribe(
          f => {
            if (f.Success && f.Data != null) {
              this.adressList = f.Data;
              if (this.router.snapshot.queryParams['CurrentAddressId'] != null && this.router.snapshot.queryParams['CurrentAddressId'] > 0) {
                this.selectedAdressId = this.router.snapshot.queryParams['CurrentAddressId'];
              }
              console.log(f.Data); // todo remove
            } else {
              super.showToast(this.toastCtrl, this.translateService.instant("Msg_Error"));
            }

          },
          error => {
            super.showToast(this.toastCtrl, this.translateService.instant("Msg_Error"));
          });
    }
  }

  addNewAddress() {
    this.navCtrl.navigateForward('AddAdressPage', {
      queryParams: {
        type: 'shippingAdress'
      }
    });
  }
  modifyAdress(adress) {
    this.navCtrl.navigateForward('AddAdressPage', {
      queryParams: {
        type: 'shippingAdress',
        adress: JSON.stringify(adress)
      }
    });
  }

  saveShippingAdress() {
    var selectedShippingAdress = this.getSelectedAdress();
    // todo migrate to new navigation system
    // this.navCtrl.getPrevious().data.tempSelectedAdress = selectedShippingAdress;// Important! :  pass data to previous page
    this.navCtrl.pop();
  }
  getSelectedAdress() {
    return this.adressList.find(p => p.Id == this.selectedAdressId);
  }

}
