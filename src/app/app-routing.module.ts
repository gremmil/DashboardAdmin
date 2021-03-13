import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardFullComponentGuard } from './guards/guard-full-component.guard';
import { FullComponentComponent } from './template/full-component/full-component.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponentComponent,
    canActivate: [GuardFullComponentGuard],
    children:[
      {
        path: '',
        redirectTo: '/pages/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: 
      () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
