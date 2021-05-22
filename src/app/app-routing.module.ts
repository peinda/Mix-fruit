import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./libs/views/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'profil',
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
    path: 'profil',
    loadChildren: () => import('./libs/views/pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
