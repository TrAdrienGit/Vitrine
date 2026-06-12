import {Component, Input} from '@angular/core';
import {Member} from '../../../../core/models/member.model';

@Component({
  selector: 'app-profile-skills',
  imports: [],
  templateUrl: './profile-skills.html',
  styleUrl: './profile-skills.css',
})
export class ProfileSkills {
  @Input() member!: Member;
}
