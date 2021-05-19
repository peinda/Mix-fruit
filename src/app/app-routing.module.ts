import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./libs/views/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-compte',
    loadChildren: () => import('./libs/views/pages/create-compte/create-compte.module').then(m => m.CreateComptePageModule)
  },
  {
    path: 'views',
    loadChildren: () => import('./libs/views/pages/couvertureAppli/libs/views/views.module').then(m => m.ViewsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
