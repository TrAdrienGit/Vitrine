import { Injectable } from '@angular/core';
import { MEMBERS } from '../mock/members.mock';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  getMembers() {
    return MEMBERS;
  }

  getMemberById(id: string) {
    return MEMBERS.find(m => m.id === id);
  }

  getMemberBySlug(slug: string) {
    return MEMBERS.find(m => m.slug === slug);
  }
}
