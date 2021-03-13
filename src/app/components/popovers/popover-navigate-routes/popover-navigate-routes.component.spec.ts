import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopoverNavigateRoutesComponent } from './popover-navigate-routes.component';

describe('PopoverNavigateRoutesComponent', () => {
  let component: PopoverNavigateRoutesComponent;
  let fixture: ComponentFixture<PopoverNavigateRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverNavigateRoutesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverNavigateRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
