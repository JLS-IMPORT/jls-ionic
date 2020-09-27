import { Component, OnInit } from '@angular/core';
import { BaseUI } from '../common/baseui';
import { environment } from 'src/environments/environment';
import { NavController, ToastController } from '@ionic/angular';
import { UtilsService } from '../service/utils.service';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { RestService } from '../service/rest.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage extends BaseUI {


  public logined: boolean = false;
  public cartProductList: any[] = [];
  public checkAllProduct: boolean = false;
  public host = environment.SERVER_API_URL;

  constructor(
    public navCtrl: NavController,
    public utils: UtilsService,
    public storage: Storage,
    public network: Network,
    public rest: RestService,
    public toastCtrl: ToastController,
    public translateService: TranslateService
  ) {
    super();
  }

  ngOnInit() {
  }

  async checkLogined() {

    this.logined = await this.utils.checkIsLogined();
  }

  async ionViewDidEnter() {
    await this.checkLogined();
    this.cartProductList = JSON.parse(await this.utils.getKey('cartProductList'));

    // Renew quantity check if quantiy < min quantity
    if (this.cartProductList != null && this.cartProductList.length > 0) {
      this.cartProductList.map(f => {
        if (f.Quantity < f.MinQuantity) {
          f.Quantity = f.MinQuantity;
        }
      });
    }
  }

  viewProductDetail(productId){
    this.navCtrl.navigateForward('ProductDetailPage',{
      queryParams:{
        productId: productId
      }
    })
  }

  itemCheckBoxChange(item: any) {
    if (item.Selected == false) {
      this.checkAllProduct = false;
    }
    this.SaveCart();
  }

  checkQuantityWithMinQuantity(minQuantity, Quantity) {
    if (minQuantity != null && Quantity != null) {
      if (Quantity > minQuantity) {
        return Quantity;
      }
      else {
        return minQuantity;
      }
    }
    return 0;
  }

  onUpdate(data, minQuantity) {
    if (typeof data.number === 'number') {
      this.cartProductList.forEach(p => {
        if (p.ReferenceId == data.goods) {
          p.Quantity = data.number > minQuantity ? data.number : minQuantity;
        }
      });
      this.SaveCart();
    }
  }

  async valideCart() {
    if (this.logined) {
      /* Step1 : Get all the selected product */
      var selectedProduct = this.GetSelectedProduct();

      /* Step2: Get the real info for the product */
      var selectedReferenceIds = [];
      selectedProduct.map(p => selectedReferenceIds.push({ ReferenceId: p.ReferenceId, Quantity: p.Quantity }));
      this.navCtrl.navigateForward('OrderConfirmationPage', {
        queryParams: {
          References: JSON.stringify(selectedReferenceIds)
        }
      });
    }
    else {
      super.showToast(this.toastCtrl, this.translateService.instant("Msg_NotConnected"));
    }
  }

  AllCheckBoxChange() {
    if (this.checkAllProduct == true) {
      this.cartProductList.forEach(p => {
        p.Selected = true;
      });
    }
    else {
      this.cartProductList.forEach(p => {
        p.Selected = false;
      });
    }
  }
  removeItem(item) {
    this.cartProductList = this.cartProductList.filter(p => p.ReferenceId != item.ReferenceId);
    this.SaveCart();
  }

  /* Utils methods */
  SaveCart() {
    this.storage.set('cartProductList', JSON.stringify(this.cartProductList));
  }

  GetSelectedProduct() {
    if (this.cartProductList != null && this.cartProductList.length > 0) {
      return this.cartProductList.filter(p => {
        return p.Selected == true;
      });
    }
    else {
      return [];
    }
  }

  CalculAccount() {
    var totalAccount = 0;
    var selectedProduct = this.GetSelectedProduct();
    selectedProduct.forEach(p => {
      totalAccount = totalAccount + (p.Quantity * p.Price * p.QuantityPerBox);
    });
    return totalAccount;
  }
  checkProductListIsAvailable() {

    return this.cartProductList != null && this.cartProductList.length > 0;
  }

  checkSelectedProductListIsEmpty() {
    var selectedProductList = this.GetSelectedProduct();

    return this.GetSelectedProduct().length > 0
  }

}
