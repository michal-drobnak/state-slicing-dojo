import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LibraryStore } from './state-library';

@Component({
  selector: 'peek-dojo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ``,
  providers: [LibraryStore]
})
export class DojoComponent {
  protected readonly store = inject(LibraryStore);
}
