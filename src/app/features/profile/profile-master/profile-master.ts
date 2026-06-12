import {Component, inject} from '@angular/core';
import {ProfileContact} from "../components/profile-contact/profile-contact";
import {ProfileHeader} from "../components/profile-header/profile-header";
import {ProfileLinks} from "../components/profile-links/profile-links";
import {ProfileProjects} from "../components/profile-projects/profile-projects";
import {ProfileSkills} from "../components/profile-skills/profile-skills";
import {MemberService} from '../../../core/services/member.service';
import {ActivatedRoute} from '@angular/router';
import {Member} from '../../../core/models/member.model';

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
export class ProfileMaster {

  private route: ActivatedRoute = inject(ActivatedRoute);
  private memberService: MemberService = inject(MemberService);

  public member?: Member;

  constructor() {
    const slug: string | null = this.route.snapshot.paramMap.get('member_slug');
    if (!slug) return;
    this.member = this.memberService.getMemberBySlug(slug!);
  }
}
