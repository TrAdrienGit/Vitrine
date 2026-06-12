import {Component, Input} from '@angular/core';
import {Member} from '../../../../core/models/member.model';

@Component({
  selector: 'app-profile-header',
  imports: [],
  templateUrl: './profile-header.html',
  styleUrl: './profile-header.css',
})
export class ProfileHeader {
  @Input() member!: Member;
}
