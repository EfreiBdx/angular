import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pheader } from './pheader';

describe('Pheader', () => {
  let component: Pheader;
  let fixture: ComponentFixture<Pheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pheader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
