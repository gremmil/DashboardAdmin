import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavigateRoutesRoutePage } from './navigate-routes-route.page';

describe('NavigateRoutesRoutePage', () => {
  let component: NavigateRoutesRoutePage;
  let fixture: ComponentFixture<NavigateRoutesRoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigateRoutesRoutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigateRoutesRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
