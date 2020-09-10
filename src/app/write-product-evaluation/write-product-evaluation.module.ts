import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteProductEvaluationPageRoutingModule } from './write-product-evaluation-routing.module';

import { WriteProductEvaluationPage } from './write-product-evaluation.page';
import { TranslateModule } from '@ngx-translate/core';
import { StarRatingModule } from 'ionic5-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WriteProductEvaluationPageRoutingModule,
    TranslateModule,
    StarRatingModule
  ],
  declarations: [WriteProductEvaluationPage]
})
export class WriteProductEvaluationPageModule {}
