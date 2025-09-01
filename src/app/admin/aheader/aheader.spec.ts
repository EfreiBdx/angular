import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aheader } from './aheader';

describe('Aheader', () => {
  let component: Aheader;
  let fixture: ComponentFixture<Aheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aheader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
