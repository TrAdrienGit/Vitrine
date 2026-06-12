import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  imports: [
    RouterLink,
  ],
  styleUrl: './navbar.css'
})
export class Navbar {

  isOpen = signal(false);

  toggleMenu(): void {
    this.isOpen.update(value => !value);
  }




}
