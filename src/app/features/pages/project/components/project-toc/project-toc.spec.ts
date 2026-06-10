import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectToc } from './project-toc';

describe('ProjectToc', () => {
  let component: ProjectToc;
  let fixture: ComponentFixture<ProjectToc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectToc],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectToc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
