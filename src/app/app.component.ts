import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibraryStore } from './dojo/state-library';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'state-slicing-dojo';

  protected readonly store = inject(LibraryStore);
}
