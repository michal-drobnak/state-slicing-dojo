import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './library.types';

@Injectable({ providedIn: 'root' })
export class BookService {
  fetchBooks(): Observable<Book[]> {
    return of([
      { id: 1, title: '1984' },
      { id: 2, title: 'Brave New World' },
      { id: 3, title: 'Fahrenheit 451' },
      { id: 4, title: 'The Catcher in the Rye' },
      { id: 5, title: 'To Kill a Mockingbird' }
    ]);
  }
}
