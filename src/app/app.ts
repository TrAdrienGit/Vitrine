import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileMaster} from './features/profile/profile-master/profile-master';
import {Project} from './features/pages/project/project-page/project';
import {Navbar} from './shared/components/layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileMaster, Project, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularVitrine');
}
