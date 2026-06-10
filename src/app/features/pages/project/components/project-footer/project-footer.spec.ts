import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFooter } from './project-footer';

describe('ProjectFooter', () => {
  let component: ProjectFooter;
  let fixture: ComponentFixture<ProjectFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
