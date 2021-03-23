import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ComponentsModule } from '../../components/components.module';
import { TemplateModule } from '../../template/template.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardPageRoutingModule,
    ComponentsModule,
    SharedModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
