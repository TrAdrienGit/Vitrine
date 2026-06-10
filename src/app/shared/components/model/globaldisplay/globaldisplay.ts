import { Component } from '@angular/core';
import {ProfileHeader} from '../../../../features/profile/components/profile-header/profile-header';
import {ProfileSkills} from '../../../../features/profile/components/profile-skills/profile-skills';
import {ProfileContact} from '../../../../features/profile/components/profile-contact/profile-contact';
import {ProfileProjects} from '../../../../features/profile/components/profile-projects/profile-projects';
import {ProfileLinks} from '../../../../features/profile/components/profile-links/profile-links';

@Component({
  selector: 'app-globaldisplay',
  imports: [
    ProfileHeader,
    ProfileSkills,
    ProfileContact,
    ProfileProjects,
    ProfileLinks
  ],
  templateUrl: './globaldisplay.html',
  styleUrls: ['./globaldisplay.css'],
  standalone: true,
})
export class Globaldisplay {}
