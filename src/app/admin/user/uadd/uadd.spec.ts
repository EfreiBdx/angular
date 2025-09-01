import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uadd } from './uadd';

describe('Uadd', () => {
  let component: Uadd;
  let fixture: ComponentFixture<Uadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Uadd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uadd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
