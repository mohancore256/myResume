import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule,FormsModule, FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
