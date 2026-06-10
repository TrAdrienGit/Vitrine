import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isOpen = signal(false);

  toggleMenu(): void {
    this.isOpen.update(value => !value);
  }
}
