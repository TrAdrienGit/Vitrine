import {Component, Input} from '@angular/core';
import {Project} from '../../../../../core/models/project.model';

@Component({
  selector: 'app-project-header',
  imports: [],
  templateUrl: './project-header.html',
  styleUrl: './project-header.css',
})
export class ProjectHeader {
  @Input() project!: Project;
}
