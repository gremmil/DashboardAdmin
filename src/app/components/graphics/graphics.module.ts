import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgApexchartsModule } from 'ng-apexcharts';


import { GraphicDashboardAvanceEventoComponent } from './graphic-dashboard-avance-evento/graphic-dashboard-avance-evento.component';
import { GraphicDashboardIndicadorImagenesComponent } from './graphic-dashboard-indicador-imagenes/graphic-dashboard-indicador-imagenes.component';
import { GraphicTrackingPedidoConsultoraComponent } from './graphic-tracking-pedido-consultora/graphic-tracking-pedido-consultora.component';
import { GraphicSparklinesComponent } from './graphic-sparklines/graphic-sparklines.component';
import { GraphicDonutComponent } from './graphic-donut/graphic-donut.component';
import { GraphicDashboardAreaComponent } from './graphic-dashboard-area/graphic-dashboard-area.component';
import { GraphicDashboardLineOptionsComponent } from './graphic-dashboard-line-options/graphic-dashboard-line-options.component';

@NgModule({
  declarations: [
    GraphicDashboardAvanceEventoComponent,
    GraphicDashboardIndicadorImagenesComponent,
    GraphicTrackingPedidoConsultoraComponent,
    GraphicSparklinesComponent,
    GraphicDonutComponent,
    GraphicDashboardAreaComponent,
    GraphicDashboardLineOptionsComponent
  ],
  exports: [
    GraphicDashboardAvanceEventoComponent,
    GraphicDashboardIndicadorImagenesComponent,
    GraphicTrackingPedidoConsultoraComponent,
    GraphicSparklinesComponent,
    GraphicDonutComponent,
    GraphicDashboardAreaComponent,
    GraphicDashboardLineOptionsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgApexchartsModule
  ]
})
export class GraphicsModule { }
