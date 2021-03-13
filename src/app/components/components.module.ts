import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesModule } from './tables/tables.module';
import { GraphicsModule } from './graphics/graphics.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TablesModule,
    GraphicsModule
  ],
  exports: [
    TablesModule,
    GraphicsModule
  ]
})
export class ComponentsModule { }
