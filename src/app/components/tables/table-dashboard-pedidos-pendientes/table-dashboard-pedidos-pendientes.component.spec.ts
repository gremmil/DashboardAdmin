import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableDashboardPedidosPendientesComponent } from './table-dashboard-pedidos-pendientes.component';

describe('TableDashboardPedidosPendientesComponent', () => {
  let component: TableDashboardPedidosPendientesComponent;
  let fixture: ComponentFixture<TableDashboardPedidosPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDashboardPedidosPendientesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableDashboardPedidosPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
