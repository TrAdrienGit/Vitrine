import { Injectable } from '@angular/core';
import { PROJECTS } from '../mock/projects.mock';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  getProjects() {
    return PROJECTS;
  }

  getProjectById(id: string) {
    return PROJECTS.find(p => p.id === id);
  }

  getProjectsByOwner(ownerId: string) {
    return PROJECTS.filter(p => p.ownerId === ownerId);
  }

  slugify(title: string): string {
    return title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-');
  }

  getProjectBySlug(slug: string) {
    return PROJECTS.find(
      project => this.slugify(project.title) === slug
    );
  }
}
