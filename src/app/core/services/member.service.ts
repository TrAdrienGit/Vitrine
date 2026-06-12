import { Injectable } from '@angular/core';
import { MEMBERS } from '../mock/members.mock';
import { Member } from '../models/member.model';
import {map, Observable, of, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiUrl: string = "assets/api/members.json";

  constructor(private http: HttpClient) { }

  private simulateError = false;

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl).pipe(
      map(data => {
        if (this.simulateError) {
          throw new Error('Simulated error in pipe');
        }
        return data;
      })
    );
  }

  getMemberById(id: string): Observable<Member> {
    return this.http.get<Member[]>(this.apiUrl).pipe(
      map(members => {
        const member = members.find(m => m.id === id);

        if (!member) {
          throw new Error(`Member not found (id: ${id})`);
        }
        if (this.simulateError) {
          throw new Error('Simulated error in pipe');
        }

        return member;
      })
    );
  }

  getMemberBySlug(slug: string): Observable<Member> {
    return this.http.get<Member[]>(this.apiUrl).pipe(
      map(members => {
        const member = members.find(m => m.slug === slug);

        if (!member) {
          throw new Error(`Member not found (slug: ${slug})`);
        }
        if (this.simulateError) {
          throw new Error('Simulated error in pipe');
        }

        return member;
      })
    );
  }
}
