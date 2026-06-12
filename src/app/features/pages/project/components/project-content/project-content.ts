import {Component, Input} from '@angular/core';
import {Project} from '../../../../../core/models/project.model';

@Component({
  selector: 'app-project-content',
  imports: [],
  templateUrl: './project-content.html',
  styleUrl: './project-content.css',
})
export class ProjectContent {
  @Input() project!: Project;
}
