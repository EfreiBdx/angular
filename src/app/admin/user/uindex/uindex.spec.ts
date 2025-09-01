import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uindex } from './uindex';

describe('Uindex', () => {
  let component: Uindex;
  let fixture: ComponentFixture<Uindex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Uindex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uindex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
