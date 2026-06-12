import {Component, Input} from '@angular/core';
import {Member} from '../../../../core/models/member.model';

@Component({
  selector: 'app-profile-links',
  imports: [],
  templateUrl: './profile-links.html',
  styleUrl: './profile-links.css',
})
export class ProfileLinks {
  @Input() member!: Member;
}
