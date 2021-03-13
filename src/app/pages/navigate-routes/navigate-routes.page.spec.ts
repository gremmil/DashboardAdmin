import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavigateRoutesPage } from './navigate-routes.page';

describe('NavigateRoutesPage', () => {
  let component: NavigateRoutesPage;
  let fixture: ComponentFixture<NavigateRoutesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigateRoutesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigateRoutesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
