import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumePage } from './resume.page';

const routes: Routes = [
  {
    path: '',
    component: ResumePage
  },
  {
    path: 'hamburger',
    loadChildren: () => import('./hamburger/hamburger.module').then( m => m.HamburgerPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./experience/experience.module').then( m => m.ExperiencePageModule)
  },
  {
    path: 'landingPage',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumePageRoutingModule {}
