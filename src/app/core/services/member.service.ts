import { Injectable } from '@angular/core';
import { MEMBERS } from '../mock/members.mock';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  getMembers(): Member[] {
    return MEMBERS;
  }

  getMemberById(id: string): Member | undefined {
    return MEMBERS.find(m => m.id === id);
  }

  getMemberBySlug(slug: string): Member | undefined {
    return MEMBERS.find(m => m.slug === slug);
  }
}
