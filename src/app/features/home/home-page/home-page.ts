import { Component, inject } from '@angular/core';
import { MemberCard } from '../components/member-card/member-card';
import { MemberService } from '../../../core/services/member.service';
import { Member } from '../../../core/models/member.model';

@Component({
  selector: 'app-home-page',
  imports: [
    MemberCard
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private memberService: MemberService = inject(MemberService);
  members: Member[] = this.memberService.getMembers();
}
