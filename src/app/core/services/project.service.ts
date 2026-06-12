import { Injectable } from '@angular/core';
import { PROJECTS } from '../mock/projects.mock';
import {Project} from '../models/project.model';
import {map, Observable, of, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private simulateError = false;

  slugify(title: string): string {
    return title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-');
  }

  //------ GETTER -------//

  private apiUrl = 'assets/api/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    if (this.simulateError) {
      return throwError(() => new Error('Simulated project list error'));
    }

    return this.http.get<Project[]>(this.apiUrl);
  }

  getProjectById(id: string): Observable<Project> {
    return this.http.get<Project[]>(this.apiUrl).pipe(
      map(projects => {
        const project = projects.find(p => p.id === id);

        if (!project) {
          throw new Error(`Project not found (id: ${id})`);
        }
        if (this.simulateError) {
          throw new Error('Simulated error in pipe');
        }

        return project;
      })
    );
  }

  getProjectBySlug(slug: string): Observable<Project> {
    return this.http.get<Project[]>(this.apiUrl).pipe(
      map(projects => {
        const project = projects.find(
          p => p.title.toLowerCase().replace(/\s+/g, '-') === slug
        );

        if (!project) {
          throw new Error(`Project not found (slug: ${slug})`);
        }
        if (this.simulateError) {
          throw new Error('Simulated error in pipe');
        }

        return project;
      })
    );
  }

  getProjectsByIds(ids: string[]): Observable<Project[]> {
    if (this.simulateError) {
      return throwError(() => new Error('Simulated project list error (ids)'));
    }

    return this.http.get<Project[]>(this.apiUrl).pipe(
      map(projects => projects.filter(p => ids.includes(p.id)))
    );
  }
}
