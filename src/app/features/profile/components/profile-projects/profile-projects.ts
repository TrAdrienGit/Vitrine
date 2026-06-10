import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profile-projects',
  imports: [],
  templateUrl: './profile-projects.html',
  styleUrl: './profile-projects.css',
})
export class ProfileProjects {
  @Input() member!: any;
}
