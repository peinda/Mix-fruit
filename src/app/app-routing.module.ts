import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'connection',
    pathMatch: 'full'
  },
  {
    path: 'create-compte',
    loadChildren: () => import('./libs/views/pages/create-compte/create-compte.module').then(m => m.CreateComptePageModule)
  },
  {
    path: 'couverture-appli',
    loadChildren: () => import('./libs/views/pages/couverture-appli/couverture-appli.module').then(m => m.CouvertureAppliPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./libs/views/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'verification-code',
    loadChildren: () => import('./libs/views/pages/verification-code/verification-code.module').then(m => m.VerificationCodePageModule)
  },
  {
    path: 'connection',
    loadChildren: () => import('./libs/views/pages/connection/connection.module').then( m => m.ConnectionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
