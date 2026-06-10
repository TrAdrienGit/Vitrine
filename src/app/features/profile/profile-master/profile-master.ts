import { Component } from '@angular/core';
import {ProfileContact} from "../components/profile-contact/profile-contact";
import {ProfileHeader} from "../components/profile-header/profile-header";
import {ProfileLinks} from "../components/profile-links/profile-links";
import {ProfileProjects} from "../components/profile-projects/profile-projects";
import {ProfileSkills} from "../components/profile-skills/profile-skills";

@Component({
  selector: 'app-profile-master',
    imports: [
        ProfileContact,
        ProfileHeader,
        ProfileLinks,
        ProfileProjects,
        ProfileSkills
    ],
  templateUrl: './profile-master.html',
  styleUrl: './profile-master.css',
})
export class ProfileMaster {}
