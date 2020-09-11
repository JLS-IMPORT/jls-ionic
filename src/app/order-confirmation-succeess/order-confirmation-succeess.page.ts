import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../service/utils.service';

@Component({
  selector: 'app-order-confirmation-succeess',
  templateUrl: './order-confirmation-succeess.page.html',
  styleUrls: ['./order-confirmation-succeess.page.scss'],
})
export class OrderConfirmationSucceessPage implements OnInit {
  public email:string;
  public message : string ;

  constructor(public navCtrl: NavController, 
    public utils :UtilsService,
    public translateService: TranslateService,
    public router: ActivatedRoute
    ) {

     }

  ngOnInit() {

    this.email = this.router.snapshot.queryParams['email']; //await this.utils.getKey('email');
    if(this.router.snapshot.queryParams['page']!=null && this.router.snapshot.queryParams['page'] == 'RegistrePage'){
      this.message = this.translateService.instant('registre-succed.Confirm')!=null ? this.translateService.instant('registre-succed.Confirm').replace('{email}', this.email): '';
    }
    else if(this.router.snapshot.queryParams['page']!=null && this.router.snapshot.queryParams['page'] == 'ForgetPasswordPage'){
      this.message = this.translateService.instant('registre-succed.ForgetPasswordSendEmail')!=null ? this.translateService.instant('registre-succed.ForgetPasswordSendEmail').replace('{email}', this.email): '';
    }
  }

  returnToAccueil(){
    // Set the tab to the first choice 
    //this.navCtrl.parent.select(0);
    this.navCtrl.navigateRoot('TabsPage');
  }

}
