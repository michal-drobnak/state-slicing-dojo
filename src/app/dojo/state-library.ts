import { updateState } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { signalStore, type, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { addEntities, addEntity, removeEntity, updateEntity, withEntities } from '@ngrx/signals/entities';
import { BookService } from './book.service';
import { LendingService } from './lending.service';
import { Book, Magazine } from './library.types';
import { MagazineService } from './magazine.service';

type LibraryState = {
  librarian: string;
};

const LIBRARY_INITIAL_STATE: LibraryState = {
  librarian: 'Michal Drobňák'
};

export const LibraryStore = signalStore(
  { providedIn: 'root' },
  withState<LibraryState>(LIBRARY_INITIAL_STATE),
  withEntities<Book>(),
  withEntities({ entity: type<Magazine>(), collection: 'magazines' }),
  withComputed((store) => ({
    bookCount: computed(() => store.entities.length),
    magazineCount: computed(() => store.magazinesEntities.length)
  })),
  withMethods((store, lendingService = inject(LendingService)) => ({
    addBook(book: Book): void {
      updateState(store, 'add book', addEntity(book));
    },
    removeBook(book: Book): void {
      updateState(store, 'remove book', removeEntity(book.id));
    },
    renameBook(id: number, title: string): void {
      updateState(store, 'rename book', updateEntity({ id, changes: { title } }));
    },
    addMagazine(magazine: Magazine): void {
      updateState(store, 'add magazine', addEntity(magazine, { collection: 'magazines' }));
    },
    removeMagazine(magazine: Magazine): void {
      updateState(store, 'remove magazine', removeEntity(magazine.id, { collection: 'magazines' }));
    },
    renameMagazine(id: number, title: string): void {
      updateState(store, 'rename magazine', updateEntity({ id, changes: { title } }, { collection: 'magazines' }));
    },
    setLibrarian(name: string): void {
      updateState(store, 'set librarian', { librarian: name });
    },
    lendBook(book: Book): void {
      lendingService.lendBook(book.title, store.librarian());
    },
    lendMagazine(magazine: Magazine): void {
      lendingService.lendMagazine(magazine.title, store.librarian());
    }
  })),
  withHooks((store) => ({
    onInit: () => {
      const bookService = inject(BookService);
      const magazineService = inject(MagazineService);

      bookService.fetchBooks().subscribe((books) => {
        updateState(store, 'load books', addEntities(books));
      });

      magazineService.fetchMagazines().subscribe((magazines) => {
        updateState(store, 'load magazines', addEntities(magazines, { collection: 'magazines' }));
      });
    }
  }))
);
