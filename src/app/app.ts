import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileMaster} from './features/profile/profile-master/profile-master';
import {Project} from './features/pages/project/project-page/project';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileMaster, Project],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularVitrine');
}
