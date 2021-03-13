import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigateRoutesPage } from './navigate-routes.page';

const routes: Routes = [
  {
    path: '',
    component: NavigateRoutesPage
  },
  {
    path: 'navigate-routes-route',
    loadChildren: () => import('./navigate-routes-route/navigate-routes-route.module').then( m => m.NavigateRoutesRoutePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigateRoutesPageRoutingModule {}
