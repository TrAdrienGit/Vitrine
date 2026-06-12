import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectHeader } from '../components/project-header/project-header';
import { ProjectToc } from '../components/project-toc/project-toc';
import { ProjectContent } from '../components/project-content/project-content';
import { ProjectFooter } from '../components/project-footer/project-footer';

import { ProjectService } from '../../../../core/services/project.service';
import { Project } from '../../../../core/models/project.model';
import {catchError, Observable, of} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {BackButton} from '../../../../shared/components/button/back-button/back-button';

@Component({
  selector: 'app-project',
  imports: [
    ProjectHeader,
    ProjectToc,
    ProjectContent,
    ProjectFooter,
    AsyncPipe,
    BackButton
  ],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class ProjectPage implements OnInit {

  private route: ActivatedRoute = inject(ActivatedRoute);
  private projectService: ProjectService = inject(ProjectService);

  public project$!: Observable<Project | undefined>;

  ngOnInit(): void {
    const projectSlug = this.route.snapshot.paramMap.get('project_slug');

    if (!projectSlug) return;

    this.project$ = this.projectService.getProjectBySlug(projectSlug).pipe(
      catchError(err => {
        console.error('Error loading members', err);
        return of(undefined); //fallbacksafe ?
      })
    );
  }
}
