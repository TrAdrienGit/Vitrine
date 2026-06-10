import { Component } from '@angular/core';
import {MemberCard} from '../components/member-card/member-card';

@Component({
  selector: 'app-home-page',
  imports: [
    MemberCard
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
