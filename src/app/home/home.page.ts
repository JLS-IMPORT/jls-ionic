import { Component, OnInit } from '@angular/core';
import { BaseUI } from '../common/baseui';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../service/utils.service';
import { RestService } from '../service/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BaseUI {


  public host = environment.SERVER_API_URL;

  public sldes: any[] = [];
  public logined: boolean = false;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public translate: TranslateService,
    public utils: UtilsService,
    public toastCtrl: ToastController,
    public rest: RestService) {
    super();
  }

  ngOnInit() {
    // todo: place into right angular life cycle function
    this.rest.GetWbesiteslides(null).subscribe(result=>{
      if(result!=null && result.length>0){
        this.sldes = result;
      }
    });
  }


  async checkLogined() {

    this.logined = await this.utils.checkIsLogined();

    if (this.logined == true) {
      this.loadNotReadMessage();
    }
  }

  async ionViewDidEnter() {

    await this.checkLogined();
  }

  displaynewProductPage() {
    this.navCtrl.navigateForward('NewproductPage',
      {
        queryParams: {
          Title: this.translate.instant("/NewProduit"),
          PageType: 'NewProduct'
        }

      });
  }

  displayByLowerSales() {
    this.navCtrl.navigateForward('NewproductPage',
      {
        queryParams: {
          Title: this.translate.instant("/Promotionproduit"),
          PageType: 'LowerPriceProduct'
        }
      });
  }

  loadNotReadMessage() {

    this.rest.GetNoReadMessageCount({ UserId: localStorage.getItem('userId') }).subscribe(result => {
      if (result != null) {
        // TODO: Migration to rxjs subscriber 
        // this.event.publish('message:new', result);
      }
    })
  }

  displayBestSalesProductPage() {
    this.navCtrl.navigateForward('/NewproductPage',
      {
        queryParams: {
          Title: this.translate.instant("BestSalesProduit"),
          PageType: 'BestSalesProduct'
        }
      });
  }

  myList() {
    if (this.logined) {
      this.navCtrl.navigateForward('/NewproductPage',
        {
          queryParams: {
            Title: this.translate.instant("Meslistes"),
            PageType: 'FavoriteList'
          }

        });
    }
    else {
      super.showToast(this.toastCtrl, this.translate.instant("Msg_NotConnected"));
    }

  }
  advancedSearch() {

    this.navCtrl.navigateForward('/NewproductPage',
      {
        queryParams:{
          Title: this.translate.instant("home.AdvancedSearch"),
          PageType: 'AdvancedProductSearch'
        }
      });
    //this.navCtrl.push('AdvancedSearchPage');
  }
  search() {
    this.navCtrl.navigateForward('/SearchPage');
  }

  contactUs() {
    this.navCtrl.navigateForward('/ContactUsPage');
  }

  displayCategoryListPage() {
    this.navCtrl.navigateForward("/CategoryListPage");
  }

  displayAvis() {
    this.navCtrl.navigateForward('/ProductEvaluationListPage');// show all
  }


  async translation() {
    // TODO: migration to lazy load modal 
    // let modal = this.modalCtrl.create('TranslationPage');
    // modal.onDidDismiss(() => {

    // });
    // modal.present();

    // const modal = await this.modalCtrl.create({
    //   component: ModalPage,
    //   cssClass: 'my-custom-class'
    // });
    
  }
}
