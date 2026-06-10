import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLinks } from './profile-links';

describe('ProfileLinks', () => {
  let component: ProfileLinks;
  let fixture: ComponentFixture<ProfileLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileLinks],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileLinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
