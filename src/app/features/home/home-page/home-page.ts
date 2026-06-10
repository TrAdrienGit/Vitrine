import { Component, inject } from '@angular/core';
import { MemberCard } from '../components/member-card/member-card';
import { MemberService } from '../../../core/services/member.service';

@Component({
  selector: 'app-home-page',
  imports: [
    MemberCard
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private memberService = inject(MemberService);
  members = this.memberService.getMembers();
}
