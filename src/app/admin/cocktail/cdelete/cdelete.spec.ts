import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cdelete } from './cdelete';

describe('Cdelete', () => {
  let component: Cdelete;
  let fixture: ComponentFixture<Cdelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cdelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cdelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
