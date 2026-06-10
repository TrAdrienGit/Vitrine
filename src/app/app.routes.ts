import { Routes } from '@angular/router';
import {ContactPage} from './features/contact/contact-page/contact-page';
import {ProfileMaster} from './features/profile/profile-master/profile-master';
import {Project} from './features/pages/project/project-page/project';
import {HomePage} from './features/home/home-page/home-page';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: "contact", component: ContactPage},
  {path: "PrenomNOM", component: ProfileMaster},
  {path: "PrenomNOM/ProjectNAME", component: Project},
];
