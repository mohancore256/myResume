import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HambergerPage } from './hamberger.page';

const routes: Routes = [
  {
    path: 'menu',
    component: HambergerPage,
    children: [
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then(m => m.ContactPageModule)
      }, 
      {
        path: 'landingPage',
        loadChildren: () => import('../landing-page/landing-page.module').then(m => m.LandingPagePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo:'/menu/landingPage'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HambergerPageRoutingModule { }
