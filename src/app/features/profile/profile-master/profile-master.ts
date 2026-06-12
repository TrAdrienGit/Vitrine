import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProfileContact } from '../components/profile-contact/profile-contact';
import { ProfileHeader } from '../components/profile-header/profile-header';
import { ProfileLinks } from '../components/profile-links/profile-links';
import { ProfileProjects } from '../components/profile-projects/profile-projects';
import { ProfileSkills } from '../components/profile-skills/profile-skills';

import { MemberService } from '../../../core/services/member.service';
import { Member } from '../../../core/models/member.model';
import {catchError, filter, Observable, of} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {BackButton} from '../../../shared/components/button/back-button/back-button';

@Component({
  selector: 'app-profile-master',
  imports: [
    ProfileContact,
    ProfileHeader,
    ProfileLinks,
    ProfileProjects,
    ProfileSkills,
    AsyncPipe,
    BackButton
  ],
  templateUrl: './profile-master.html',
  styleUrl: './profile-master.css',
})
export class ProfileMaster implements OnInit {

  private route = inject(ActivatedRoute);
  private memberService = inject(MemberService);

  public member$!: Observable<Member | undefined>;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('member_slug');

    if (!slug) return;

    this.member$ = this.memberService.getMemberBySlug(slug).pipe(
      catchError(err => {
        console.error(err);
        return of(undefined);
      })
    );
  }
}
