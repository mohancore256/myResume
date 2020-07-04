import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HambergerPageRoutingModule } from './hamberger-routing.module';

import { HambergerPage } from './hamberger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HambergerPageRoutingModule
  ],
  declarations: [HambergerPage]
})
export class HambergerPageModule {}
