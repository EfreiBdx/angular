import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadd } from './cadd';

describe('Cadd', () => {
  let component: Cadd;
  let fixture: ComponentFixture<Cadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cadd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
