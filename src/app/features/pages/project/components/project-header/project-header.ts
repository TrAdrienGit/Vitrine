import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-header',
  imports: [],
  templateUrl: './project-header.html',
  styleUrl: './project-header.css',
})
export class ProjectHeader {
  @Input() project!: any;
}
