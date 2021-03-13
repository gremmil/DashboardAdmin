import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraphicDashboardAvanceEventoComponent } from './graphic-dashboard-avance-evento.component';

describe('GraphicDashboardAvanceEventoComponent', () => {
  let component: GraphicDashboardAvanceEventoComponent;
  let fixture: ComponentFixture<GraphicDashboardAvanceEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicDashboardAvanceEventoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicDashboardAvanceEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
