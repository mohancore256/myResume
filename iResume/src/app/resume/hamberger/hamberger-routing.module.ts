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
      },
      {
        path: 'myProfile',
        loadChildren: () => import('../personalinfo/personalinfo.module').then(m => m.PersonalinfoPageModule)
      }, 
      {
        path: 'workExperience',
        loadChildren: () => import('../work-experience/work-experience.module').then(m => m.WorkExperiencePageModule)
      },
      {
        path: 'aboutApp',
        loadChildren: () => import('../about-app/about-app.module').then(m => m.AboutAppPageModule)
      },
      {
        path: '',
        redirectTo:'/menu/landingPage'
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
