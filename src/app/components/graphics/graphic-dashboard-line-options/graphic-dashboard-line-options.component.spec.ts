import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraphicDashboardLineOptionsComponent } from './graphic-dashboard-line-options.component';

describe('GraphicDashboardLineOptionsComponent', () => {
  let component: GraphicDashboardLineOptionsComponent;
  let fixture: ComponentFixture<GraphicDashboardLineOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicDashboardLineOptionsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicDashboardLineOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
