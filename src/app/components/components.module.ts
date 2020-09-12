import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonMeterComponent } from './ion-meter/ion-meter.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [IonMeterComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [IonMeterComponent]
})
export class ComponentsModule { }
