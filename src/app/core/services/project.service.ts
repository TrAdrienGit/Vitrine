import { Injectable } from '@angular/core';
import { PROJECTS } from '../mock/projects.mock';
import {Project} from '../models/project.model';

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


  getProjects(): Project[] {
    return PROJECTS;
  }

  getProjectsByOwner(ownerId: string): Project[] {
    return PROJECTS.filter(p => p.ownerId === ownerId);
  }

  getProjectById(id: string): Project | undefined {
    return PROJECTS.find(p => p.id === id);
  }

  getProjectBySlug(slug: string): Project | undefined {
    return PROJECTS.find(
      project => this.slugify(project.title) === slug
    );
  }
}
