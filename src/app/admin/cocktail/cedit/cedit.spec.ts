import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cedit } from './cedit';

describe('Cedit', () => {
  let component: Cedit;
  let fixture: ComponentFixture<Cedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cedit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cedit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
