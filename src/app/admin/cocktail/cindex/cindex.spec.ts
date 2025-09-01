import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cindex } from './cindex';

describe('Cindex', () => {
  let component: Cindex;
  let fixture: ComponentFixture<Cindex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cindex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cindex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
