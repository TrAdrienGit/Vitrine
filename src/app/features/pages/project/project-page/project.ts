import {Component, inject} from '@angular/core';
import {ProjectHeader} from '../components/project-header/project-header';
import {ProjectToc} from '../components/project-toc/project-toc';
import {ProjectContent} from '../components/project-content/project-content';
import {ProjectFooter} from '../components/project-footer/project-footer';
import {ActivatedRoute} from '@angular/router';
import {MemberService} from '../../../../core/services/member.service';
import {ProjectService} from '../../../../core/services/project.service';
import {Member} from '../../../../core/models/member.model';
import {Project} from '../../../../core/models/project.model';

@Component({
  selector: 'app-project',
  imports: [
    ProjectHeader,
    ProjectToc,
    ProjectContent,
    ProjectFooter
  ],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class ProjectPage {
  private route: ActivatedRoute = inject(ActivatedRoute);

  //private memberService: MemberService = inject(MemberService);
  //public member: Member;
  private projectService: ProjectService = inject(ProjectService);
  public project?: Project;

  constructor() {
    const project_slug: string | null = this.route.snapshot.paramMap.get('project_slug');

    if (!project_slug) return;
    this.project = this.projectService.getProjectBySlug(project_slug);
  }
}
