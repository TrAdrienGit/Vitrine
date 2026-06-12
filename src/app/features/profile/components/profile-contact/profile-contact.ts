import {Component, Input} from '@angular/core';
import {Member} from '../../../../core/models/member.model';

@Component({
  selector: 'app-profile-contact',
  imports: [],
  templateUrl: './profile-contact.html',
  styleUrl: './profile-contact.css',
})
export class ProfileContact {
  @Input() member!: Member;
}
