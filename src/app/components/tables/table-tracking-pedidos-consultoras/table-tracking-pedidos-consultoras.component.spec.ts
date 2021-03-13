import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableTrackingPedidosConsultorasComponent } from './table-tracking-pedidos-consultoras.component';

describe('TableTrackingPedidosConsultorasComponent', () => {
  let component: TableTrackingPedidosConsultorasComponent;
  let fixture: ComponentFixture<TableTrackingPedidosConsultorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTrackingPedidosConsultorasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableTrackingPedidosConsultorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
