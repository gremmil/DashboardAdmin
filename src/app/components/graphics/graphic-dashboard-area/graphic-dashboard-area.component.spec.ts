import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraphicDashboardAreaComponent } from './graphic-dashboard-area.component';

describe('GraphicDashboardAreaComponent', () => {
  let component: GraphicDashboardAreaComponent;
  let fixture: ComponentFixture<GraphicDashboardAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicDashboardAreaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicDashboardAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
