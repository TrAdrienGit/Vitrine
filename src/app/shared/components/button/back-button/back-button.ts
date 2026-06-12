import { Component, inject } from '@angular/core';
import {AsyncPipe, Location} from '@angular/common';

@Component({
  selector: 'app-back-button',
  imports: [
  ],
  templateUrl: './back-button.html',
  styleUrl: './back-button.css',
})
export class BackButton {

  private location = inject(Location);

  public back() {
    this.location.back();
  }

}
