import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileMaster} from './features/profile/profile-master/profile-master';
import {Project} from './features/pages/project/project-page/project';
import {Navbar} from './shared/components/layout/navbar/navbar';
import {HomePage} from './features/home/home-page/home-page';
import {ContactPage} from './features/contact/contact-page/contact-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileMaster, Project, Navbar, HomePage, ContactPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularVitrine');
}
