import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UForm } from './uform';

describe('UForm', () => {
  let component: UForm;
  let fixture: ComponentFixture<UForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
