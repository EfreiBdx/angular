import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Udelete } from './udelete';

describe('Udelete', () => {
  let component: Udelete;
  let fixture: ComponentFixture<Udelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Udelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Udelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
