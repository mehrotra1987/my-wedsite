import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingCountDownComponent } from './wedding-count-down.component';

describe('WeddingCountDownComponent', () => {
  let component: WeddingCountDownComponent;
  let fixture: ComponentFixture<WeddingCountDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingCountDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
