import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbdNameComponent } from './hbd-name.component';

describe('HbdNameComponent', () => {
  let component: HbdNameComponent;
  let fixture: ComponentFixture<HbdNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbdNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbdNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
