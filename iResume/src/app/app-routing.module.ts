import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./resume/hamberger/hamberger.module').then( m => m.HambergerPageModule)
  },
  {
    path: 'personalinfo',
    loadChildren: () => import('./resume/personalinfo/personalinfo.module').then( m => m.PersonalinfoPageModule)
  },
  {
    path: 'work-experience',
    loadChildren: () => import('./resume/work-experience/work-experience.module').then( m => m.WorkExperiencePageModule)
  },
  {
    path: 'about-app',
    loadChildren: () => import('./resume/about-app/about-app.module').then( m => m.AboutAppPageModule)
  },
  {
    path: 'workspace',
    loadChildren: () => import('./resume/workspace/workspace.module').then( m => m.WorkspacePageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./resume/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'technologies',
    loadChildren: () => import('./resume/technologies/technologies.module').then( m => m.TechnologiesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
