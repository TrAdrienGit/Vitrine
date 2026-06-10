import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Globaldisplay } from './globaldisplay';

describe('Globaldisplay', () => {
  let component: Globaldisplay;
  let fixture: ComponentFixture<Globaldisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Globaldisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(Globaldisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
