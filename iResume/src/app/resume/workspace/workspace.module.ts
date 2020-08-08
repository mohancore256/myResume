import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkspacePageRoutingModule } from './workspace-routing.module';

import { WorkspacePage } from './workspace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkspacePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [WorkspacePage]
})
export class WorkspacePageModule {}
