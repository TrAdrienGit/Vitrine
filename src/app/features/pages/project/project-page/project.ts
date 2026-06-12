import {Component, inject} from '@angular/core';
import {ProjectHeader} from '../components/project-header/project-header';
import {ProjectToc} from '../components/project-toc/project-toc';
import {ProjectContent} from '../components/project-content/project-content';
import {ProjectFooter} from '../components/project-footer/project-footer';
import {ActivatedRoute} from '@angular/router';
import {MemberService} from '../../../../core/services/member.service';
import {ProjectService} from '../../../../core/services/project.service';

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
export class Project {
  private route = inject(ActivatedRoute);

  private memberService = inject(MemberService);
  public member: any;
  private projectService = inject(ProjectService);
  public project: any;

  constructor() {
    const project_slug: string | null = this.route.snapshot.paramMap.get('project_slug');
    this.project = this.projectService.getProjectBySlug(project_slug!);


  }
}
