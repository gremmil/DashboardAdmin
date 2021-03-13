import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNavigateDirectionComponent } from './modal-navigate-direction.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalNavigateDirectionComponent
  ],
  declarations: [
    ModalNavigateDirectionComponent
  ],
  entryComponents: [
    ModalNavigateDirectionComponent
  ]
})
export class ModalNavigateDirectionModule { }
