import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uedit } from './uedit';

describe('Uedit', () => {
  let component: Uedit;
  let fixture: ComponentFixture<Uedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Uedit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uedit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
