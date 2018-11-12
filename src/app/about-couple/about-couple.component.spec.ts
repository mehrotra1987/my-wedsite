import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoupleComponent } from './about-couple.component';

describe('AboutCoupleComponent', () => {
  let component: AboutCoupleComponent;
  let fixture: ComponentFixture<AboutCoupleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCoupleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCoupleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
