import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HambergerPage } from './hamberger.page';

describe('HambergerPage', () => {
  let component: HambergerPage;
  let fixture: ComponentFixture<HambergerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HambergerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HambergerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
