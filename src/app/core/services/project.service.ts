import { Injectable } from '@angular/core';
import { PROJECTS } from '../mock/projects.mock';
import {Project} from '../models/project.model';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  slugify(title: string): string {
    return title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-');
  }

  //----- GETTER -------------//


  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProjectsByOwner(ownerId: string): Observable<Project[]> {
    return of(PROJECTS.filter(p => p.ownerId === ownerId));
  }

  getProjectById(id: string): Observable<Project> {
    const project = PROJECTS.find(p => p.id === id);
    if (!project) {
      return throwError(() => new Error('Project not found (getProjectById)'));
    }
    return of(project);
  }

  getProjectsByIds(ids: string[]): Observable<Project[]> {
    return of(PROJECTS.filter(p => ids.includes(p.id)));
  }

  getProjectBySlug(slug: string): Observable<Project> {
    const project = PROJECTS.find(project => this.slugify(project.title) === slug);
    if (!project) {
      return throwError(() => new Error('Project not found (getProjectBySlug)'));
    }
    return of(project);
  }
}
