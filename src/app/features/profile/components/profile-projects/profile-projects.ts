import {Component, inject, Input, SimpleChanges} from '@angular/core';
import {ProjectService} from '../../../../core/services/project.service';
import {Project} from '../../../pages/project/project-page/project';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-profile-projects',
  imports: [
    RouterLink
  ],
  templateUrl: './profile-projects.html',
  styleUrl: './profile-projects.css',
})
export class ProfileProjects {
  @Input() member!: any;

  protected projectService = inject(ProjectService);

  public projects_ids: Array<string> = [];
  public projects: Array<any> = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (!this.member) return;

    this.projects = this.member.projects
      .map((id: string) => this.projectService.getProjectById(id))
  }
}
