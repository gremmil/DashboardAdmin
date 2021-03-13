import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IonicModule } from '@ionic/angular';

import { TableDashboardDetalleDistritoComponent } from './table-dashboard-detalle-distrito/table-dashboard-detalle-distrito.component';
import { TableDashboardPedidosPendientesComponent } from './table-dashboard-pedidos-pendientes/table-dashboard-pedidos-pendientes.component';
import { TableTrackingPedidosConsultorasComponent } from './table-tracking-pedidos-consultoras/table-tracking-pedidos-consultoras.component';

@NgModule({
  declarations: [
    TableDashboardDetalleDistritoComponent,
    TableDashboardPedidosPendientesComponent,
    TableTrackingPedidosConsultorasComponent
  ],
  exports: [
    TableDashboardDetalleDistritoComponent,
    TableDashboardPedidosPendientesComponent,
    TableTrackingPedidosConsultorasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgxDatatableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TablesModule { }
