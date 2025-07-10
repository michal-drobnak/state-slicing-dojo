import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Magazine } from './library.types';

@Injectable({ providedIn: 'root' })
export class MagazineService {
  fetchMagazines(): Observable<Magazine[]> {
    return of([
      { id: 1, title: 'National Geographic', publishedDate: new Date('2023-01-01') },
      { id: 2, title: 'Time', publishedDate: new Date('2023-02-01') },
      { id: 3, title: 'The Economist', publishedDate: new Date('2023-03-01') },
      { id: 4, title: 'Wired', publishedDate: new Date('2023-04-01') },
      { id: 5, title: 'Forbes', publishedDate: new Date(' 2023-05-01') }
    ]);
  }
}
