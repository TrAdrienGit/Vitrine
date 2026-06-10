import { Component } from '@angular/core';
import {ProjectHeader} from '../components/project-header/project-header';
import {ProjectToc} from '../components/project-toc/project-toc';
import {ProjectContent} from '../components/project-content/project-content';
import {ProjectFooter} from '../components/project-footer/project-footer';

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
export class Project {}
