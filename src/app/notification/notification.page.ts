import { Component, OnInit } from '@angular/core';
import { BaseUI } from '../common/baseui';
import { FormBuilder } from '@angular/forms';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { RestService } from '../service/rest.service';
import { Network } from '@ionic-native/network/ngx';
import { ContactUsPage } from '../contact-us/contact-us.page';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage extends BaseUI {


  public counter: number = 0;
  public step: number = 15;
  public messageList: any[] = [];
  public loading: boolean = false;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public translateService: TranslateService,
    public toastCtrl: ToastController,
    public rest: RestService,
    public network: Network,
    public modalCtrl: ModalController

  ) {
    super();
  }

  ngOnInit() {
    // this.loadMesage();
  }


  ionViewWillEnter(){
    // execute every time
      this.loadMesage();
  }


  loadMesage() {
    if (this.network.type != 'none') {
      var criteria = {
        UserId: localStorage.getItem('userId'),
        Step: this.step,
        Begin: this.counter
      }
      this.loading = true
      this.rest.GetMessageByUserAndStatus(criteria) // 填写url的参数
        .subscribe(
          result => {
            if (result.List != null && result.List.length > 0) {
              this.messageList = result.List;

              var count = this.messageList.filter(p => p.IsReaded == false);
              // todo migrate to rxjs subscriber 
              // this.event.publish('message:new', count);
            }

            this.loading = false;
          },
          error => {
            this.loading = false;
            super.showToast(this.toastCtrl, this.translateService.instant("Msg_Error"));
          });
    }
    else {
      super.showToast(this.toastCtrl, this.translateService.instant("Msg_Offline"));
    }
  }

  async readDetailInfo(message) {
    var modal = await this.modalCtrl.create({
      component: ContactUsPage,
      componentProps: {
        SystemMessage: message
      }
    })

    modal.present();
    modal.onDidDismiss().then(() => {
      this.loadMesage();
    })
  }


  doInfinite(infiniteScroll) {
    if (this.network.type != 'none') {
      this.counter = this.counter + 1;
      var criteria = {
        UserId: localStorage.getItem('userId'),
        Step: this.step,
        Begin: this.counter
      }
      this.rest.GetMessageByUserAndStatus(criteria)
        .subscribe(
          (result: any) => {
            if (result != null && result.List != null) {
              if (result.TotalCount <= this.step * this.counter) {
                infiniteScroll.enable(false);   //没有数据的时候隐藏 ion-infinate-scroll
              }
              else {
                this.messageList = this.messageList.concat(result.List != null ? result.List : []);
                infiniteScroll.complete();
              }
            } else {
              super.showToast(this.toastCtrl, this.translateService.instant("Msg_Error"));
            }
          },
          error => {
            super.showToast(this.toastCtrl, this.translateService.instant("Msg_Error"));
          }
        );
    }
    else {
      super.showToast(this.toastCtrl, this.translateService.instant("Msg_Offline"));
    }
  }

}
