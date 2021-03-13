import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FullComponentComponent } from './full-component/full-component.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FullComponentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SharedModule
  ]
})
export class TemplateModule { }
