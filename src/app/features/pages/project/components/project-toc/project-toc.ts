import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Project} from '../../../../../core/models/project.model';

@Component({
  selector: 'app-project-toc',
  imports: [
    RouterLink
  ],
  templateUrl: './project-toc.html',
  styleUrl: './project-toc.css',
})
export class ProjectToc {
  @Input() project!: Project;
}
