import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alayout } from './alayout';

describe('Alayout', () => {
  let component: Alayout;
  let fixture: ComponentFixture<Alayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
