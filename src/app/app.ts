import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileMaster} from './features/profile/profile-master/profile-master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileMaster],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularVitrine');
}
