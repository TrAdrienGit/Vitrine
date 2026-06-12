import {Component, inject, OnInit} from '@angular/core';
import { MemberCard } from '../components/member-card/member-card';
import { MemberService } from '../../../core/services/member.service';
import { Member } from '../../../core/models/member.model';
import {catchError, Observable, of} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [
    MemberCard,
    AsyncPipe
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  private memberService: MemberService = inject(MemberService);
  public members$!: Observable<Member[]>;

  ngOnInit() {
    this.members$ = this.memberService.getMembers().pipe(
      catchError(err => {
        console.error('Error loading members', err);
        return of([]); //fallbacksafe ?
      })
    );
  }
}
