import {Component, inject, Input, OnChanges} from '@angular/core';
import {ProjectService} from '../../../../core/services/project.service';
import {RouterLink} from '@angular/router';
import {Project} from '../../../../core/models/project.model';
import {Member} from '../../../../core/models/member.model';
import {Observable} from 'rxjs';
import {AsyncPipe, JsonPipe} from '@angular/common';


@Component({
  selector: 'app-profile-projects',
  imports: [
    RouterLink,
    AsyncPipe,
  ],
  templateUrl: './profile-projects.html',
  styleUrl: './profile-projects.css',
})
export class ProfileProjects implements OnChanges {
  @Input() member!: Member;

  protected projectService = inject(ProjectService);

  public projects$: Observable<Project[]> = new Observable<Project[]>();

  constructor() {}

  ngOnChanges() {
    console.log(this.member.projects);
    if (!this.member) return;
    this.projects$ = this.projectService.getProjectsByIds(this.member.projects);
  }
}
