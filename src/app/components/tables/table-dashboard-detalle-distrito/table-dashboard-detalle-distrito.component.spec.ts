import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableDashboardDetalleDistritoComponent } from './table-dashboard-detalle-distrito.component';

describe('TableDashboardDetalleDistritoComponent', () => {
  let component: TableDashboardDetalleDistritoComponent;
  let fixture: ComponentFixture<TableDashboardDetalleDistritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDashboardDetalleDistritoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableDashboardDetalleDistritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
