import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profile-links',
  imports: [],
  templateUrl: './profile-links.html',
  styleUrl: './profile-links.css',
})
export class ProfileLinks {
  @Input() member!: any;
}
