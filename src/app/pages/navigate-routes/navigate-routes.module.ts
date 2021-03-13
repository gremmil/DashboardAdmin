import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavigateRoutesPageRoutingModule } from './navigate-routes-routing.module';

import { NavigateRoutesPage } from './navigate-routes.page';
import { SharedModule } from '../../shared/shared.module';
import { ModalNavigateDirectionModule } from '../../components/modals/modal-navigate-direction/modal-navigate-direction.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigateRoutesPageRoutingModule,
    SharedModule,
    ModalNavigateDirectionModule
  ],
  declarations: [
    NavigateRoutesPage
  ]
})
export class NavigateRoutesPageModule {}
