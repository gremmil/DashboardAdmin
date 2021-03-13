import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavigateRoutesRoutePageRoutingModule } from './navigate-routes-route-routing.module';

import { NavigateRoutesRoutePage } from './navigate-routes-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigateRoutesRoutePageRoutingModule
  ],
  declarations: [NavigateRoutesRoutePage]
})
export class NavigateRoutesRoutePageModule {}
