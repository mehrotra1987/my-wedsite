import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrationHeaderComponent } from './celebration-header.component';

describe('CelebrationHeaderComponent', () => {
  let component: CelebrationHeaderComponent;
  let fixture: ComponentFixture<CelebrationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
