import { Component, OnInit } from '@angular/core';
import { BaseUI } from '../common/baseui';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../service/utils.service';
import { RestService } from '../service/rest.service';
import { environment } from 'src/environments/environment';
import { TranslationPage } from '../translation/translation.page';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BaseUI {


  public host = environment.SERVER_API_URL;

  public screenWidth: number;
  public sldes: any[] = [];
  public logined: boolean = false;

  newProductList: any[] = [];
  hotProductList: any[] = [];
  categoryList: any[];
  loadNumberOfProduct: number = 20;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public translate: TranslateService,
    public utils: UtilsService,
    public toastCtrl: ToastController,
    public platform: Platform,
    public rest: RestService,
    public storage: Storage,
    public utilis:UtilsService) {
    super();
  }

  ngOnInit() {
    // todo: place into right angular life cycle function
    this.rest.GetWbesiteslides(null).subscribe(result => {
      if (result != null && result.length > 0) {
        this.sldes = result;
      }
    });

    this.screenWidth = this.platform.width() * 0.4; // show 3 products 
    this.loadProductAnCategoryData();
  }



  async checkLogined() {

    this.logined = await this.utils.checkIsLogined();

    if (this.logined == true) {
      this.loadNotReadMessage();
    }
  }

  async ionViewWillEnter() {
    await this.checkLogined();
  }

  displaynewProductPage() {
    this.navCtrl.navigateForward('NewproductPage',
      {
        queryParams: {
          Title: this.translate.instant("NewProduit"),
          PageType: 'NewProduct'
        }

      });
  }

  displayByLowerSales() {
    this.navCtrl.navigateForward('NewproductPage',
      {
        queryParams: {
          Title: this.translate.instant("Promotionproduit"),
          PageType: 'LowerPriceProduct'
        }
      });
  }

  secondMenu(ReferenceId: number, RefereceLabel: string) {
    this.navCtrl.navigateForward('SubCategoryListPage', {
      queryParams: {
        ReferenceId: ReferenceId,
        RefereceLabel: RefereceLabel
      }
    });
  }

  loadProductAnCategoryData() {
    // Load new product 
    this.rest.GetProductListByPublishDate(0, this.loadNumberOfProduct) //TODO: change
      .subscribe(
        (f: any) => {
          if (f.Success) {

            this.newProductList = f["Data"].ProductListData;

          } else {
            super.showToast(this.toastCtrl, this.translate.instant("Msg_Error"));
          }
        },
        error => {
          super.showToast(this.toastCtrl, this.translate.instant("Msg_Error"));
        }
      );
    
    // Load product by sales perfomance
    this.rest.GetProductListBySalesPerformance(0, this.loadNumberOfProduct) //TODO: change
      .subscribe(
        (f: any) => {
          if (f.Success) {

            this.hotProductList = f["Data"].ProductListData;

          } else {
            super.showToast(this.toastCtrl, this.translate.instant("Msg_Error"));
          }
        },
        error => {
          super.showToast(this.toastCtrl, this.translate.instant("Msg_Error"));
        }
      );

    // Load category 
    this.rest.GetProductMainCategory() // 填写url的参数
      .subscribe(
        f => {
          if (f.Success && f.Data != null) {
            this.categoryList = f.Data;
          }
        });
  }

  loadNotReadMessage() {

    // this.rest.GetNoReadMessageCount({ UserId: localStorage.getItem('userId') }).subscribe(result => {
    //   if (result != null) {
    //     // TODO: Migration to rxjs subscriber 
    //     // this.event.publish('message:new', result);
    //     this.utils.newMessageNumberSubject.next(result);
    //   }
    // })
  }

  async addInCart(event: Event, item: any) {
    event.stopPropagation();
    var cartProductList = JSON.parse(await this.utilis.getKey('cartProductList'));
    if (cartProductList == null) {
      cartProductList = [];
    }
    var temp = cartProductList.find(p => p.ReferenceId == item.ReferenceId);
    if (temp == null) {
      if (item.Quantity == null) {
        item.Quantity = 0;
      }
      cartProductList.push(item);
    }
    cartProductList.forEach(p => {
      if (p.ReferenceId == item.ReferenceId) {
        p.Quantity = p.Quantity + 1;
      }
      if (p.Selected == null) {
        p.Selected = false;
      }
    });


    this.storage.set('cartProductList', JSON.stringify(cartProductList));

    super.showToast(this.toastCtrl, this.translate.instant("Msg_AddInCart"));
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
        queryParams: {
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
    const modalTranslation = await this.modalCtrl.create({
      component: TranslationPage,
    });
    modalTranslation.present();

  }

  productDetail(product) {
    this.navCtrl.navigateForward('ProductDetailPage', {
      queryParams: {
        productId: product.ProductId
      }
    });
  }
}
