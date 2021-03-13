import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PopoverNavigateRoutesComponent } from './popover-navigate-routes.component';

@NgModule({
  declarations: [
    PopoverNavigateRoutesComponent
  ],
  exports: [
    PopoverNavigateRoutesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  entryComponents: [
    PopoverNavigateRoutesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PopoverNavigateRoutesModule { }
