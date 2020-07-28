import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkExperiencePage } from './work-experience.page';

const routes: Routes = [
  {
    path: '',
    component: WorkExperiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkExperiencePageRoutingModule {}
