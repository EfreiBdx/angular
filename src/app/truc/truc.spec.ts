import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Truc } from './truc';

describe('Truc', () => {
  let component: Truc;
  let fixture: ComponentFixture<Truc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Truc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Truc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
