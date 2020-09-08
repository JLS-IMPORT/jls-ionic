import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductEvaluationListPageRoutingModule } from './product-evaluation-list-routing.module';

import { ProductEvaluationListPage } from './product-evaluation-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductEvaluationListPageRoutingModule,
    TranslateModule
  ],
  declarations: [ProductEvaluationListPage]
})
export class ProductEvaluationListPageModule {}
