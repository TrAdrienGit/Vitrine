import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMaster } from './profile-master';

describe('ProfileMaster', () => {
  let component: ProfileMaster;
  let fixture: ComponentFixture<ProfileMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMaster],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileMaster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
