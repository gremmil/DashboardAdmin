import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraphicTrackingPedidoConsultoraComponent } from './graphic-tracking-pedido-consultora.component';

describe('GraphicTrackingPedidoConsultoraComponent', () => {
  let component: GraphicTrackingPedidoConsultoraComponent;
  let fixture: ComponentFixture<GraphicTrackingPedidoConsultoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicTrackingPedidoConsultoraComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicTrackingPedidoConsultoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
