import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraphicDashboardIndicadorImagenesComponent } from './graphic-dashboard-indicador-imagenes.component';

describe('GraphicDashboardIndicadorImagenesComponent', () => {
  let component: GraphicDashboardIndicadorImagenesComponent;
  let fixture: ComponentFixture<GraphicDashboardIndicadorImagenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicDashboardIndicadorImagenesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicDashboardIndicadorImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
