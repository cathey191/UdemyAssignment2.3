import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBtnComponent } from './display-btn.component';

describe('DisplayBtnComponent', () => {
  let component: DisplayBtnComponent;
  let fixture: ComponentFixture<DisplayBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
