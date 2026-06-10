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

}
