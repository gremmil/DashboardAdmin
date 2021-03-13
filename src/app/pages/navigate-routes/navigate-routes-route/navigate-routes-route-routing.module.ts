import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigateRoutesRoutePage } from './navigate-routes-route.page';

const routes: Routes = [
  {
    path: '',
    component: NavigateRoutesRoutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigateRoutesRoutePageRoutingModule {}
