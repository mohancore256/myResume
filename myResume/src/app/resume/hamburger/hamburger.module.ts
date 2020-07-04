import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HamburgerPageRoutingModule } from './hamburger-routing.module';

import { HamburgerPage } from './hamburger.page';
import { Routes } from '@angular/router';

// const routes: Routes = [

//   {
//     path: 'hamburger',
//     children:[
//       {
//         path: '',
//         loadChildren: () => import('../hamburger/hamburger.module').then( m => m.HamburgerPageModule)

//       },
//       {
//         path: '1',
//         loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
//       },
//       {
//         path: 'experience',
//         loadChildren: () => import('../experience/experience.module').then( m => m.ExperiencePageModule)
//       }]
    
//   },
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HamburgerPageRoutingModule
  ],
  declarations: [HamburgerPage]
})
export class HamburgerPageModule {}
