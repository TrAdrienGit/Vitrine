import {Component, inject, Input, SimpleChanges} from '@angular/core';
import {ProjectService} from '../../../../core/services/project.service';
import {RouterLink} from '@angular/router';
import {Project} from '../../../../core/models/project.model';
import {Member} from '../../../../core/models/member.model';


@Component({
  selector: 'app-profile-projects',
  imports: [
    RouterLink
  ],
  templateUrl: './profile-projects.html',
  styleUrl: './profile-projects.css',
})
export class ProfileProjects {
  @Input() member!: Member;

  protected projectService = inject(ProjectService);

  public projects_ids: Array<string> = [];
  public projects: Array<Project> = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (!this.member) return;

    this.projects = this.member.projects
      .map((id: string) => this.projectService.getProjectById(id))
      .filter((project): project is Project => project !== undefined);  //Retire les undefined
  }
}
