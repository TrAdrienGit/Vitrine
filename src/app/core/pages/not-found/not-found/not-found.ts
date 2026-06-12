import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 class="text-6xl font-bold text-(--text-primary)">404</h1>
      <p class="mt-4 text-(--text-secondary)">
        Page introuvable
      </p>
    </div>
  `
})
export class NotFoundPage {}
