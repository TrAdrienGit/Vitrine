import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProjects } from './profile-projects';

describe('ProfileProjects', () => {
  let component: ProfileProjects;
  let fixture: ComponentFixture<ProfileProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileProjects],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
