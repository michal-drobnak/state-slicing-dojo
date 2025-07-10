import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LendingService {
  lendBook(bookTitle: string, librarian: string): void {
    console.log(`Lending book: ${bookTitle} by ${librarian}`);
  }

  lendMagazine(magazineTitle: string, librarian: string): void {
    console.log(`Lending magazine: ${magazineTitle} by ${librarian}`);
  }
}
