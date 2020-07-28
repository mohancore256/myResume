import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkExperiencePageRoutingModule } from './work-experience-routing.module';

import { WorkExperiencePage } from './work-experience.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkExperiencePageRoutingModule
  ],
  declarations: [WorkExperiencePage]
})
export class WorkExperiencePageModule {}
