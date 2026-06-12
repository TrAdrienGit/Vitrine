import {Component, Input} from '@angular/core';
import {Project} from '../../../../../core/models/project.model';

@Component({
  selector: 'app-project-footer',
  imports: [],
  templateUrl: './project-footer.html',
  styleUrl: './project-footer.css',
})
export class ProjectFooter {
  @Input() project!: Project;
}
