import { Component, Input } from '@angular/core';
import {RouterLink} from '@angular/router';
import { Member } from '../../../../core/models/member.model';

@Component({
  selector: 'app-member-card',
  imports: [
    RouterLink
  ],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css',
})
export class MemberCard {
  @Input() member!: Member;
}
