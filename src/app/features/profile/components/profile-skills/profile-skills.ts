import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profile-skills',
  imports: [],
  templateUrl: './profile-skills.html',
  styleUrl: './profile-skills.css',
})
export class ProfileSkills {
  @Input() member!: any;
}
