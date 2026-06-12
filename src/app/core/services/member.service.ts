import { Injectable } from '@angular/core';
import { MEMBERS } from '../mock/members.mock';
import { Member } from '../models/member.model';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  getMembers(): Observable<Member[]> {
    return of(MEMBERS);
  }

  getMemberById(id: string): Observable<Member> {
    const member = MEMBERS.find(m => m.id === id);
    if (!member) {
      return throwError(() => new Error('Member not found (getMemberById)'));
    }
    return of(member);
  }

  getMemberBySlug(slug: string): Observable<Member> {
    const member = MEMBERS.find(m => m.slug === slug);

    if (!member) {
      return throwError(() => new Error('Member not found (getMemberBySlug)'));
    }

    return of(member);
  }

}
