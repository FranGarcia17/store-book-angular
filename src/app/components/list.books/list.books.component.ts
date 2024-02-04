import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

//Functions
import { actionSucess, warning, showDetail } from '../../utils/helper';
//Data
import data from '../../data/books.json';

//Components
import { FavoriteComponent } from '../favoriteBooks/favorite.component';

//Interfaces
import { Book } from '../../models/book.model';
import { SearchBarComponent } from '../searchBar/searchBar.component';

@Component({
  selector: 'app-list-books',
  standalone: true,
  imports: [CommonModule, FavoriteComponent, SearchBarComponent],
  templateUrl: './list.books.component.html',
})
export class BookListComponent implements OnInit {
  dataSource = data;
  showFavorite: boolean = false;
  books: Book[] = [];
  termino: string = '';

  ngOnInit(): void {
    this.loadLocalStorage();
  }

  loadLocalStorage() {
    const local = localStorage.getItem('StorageBooks');
    if (local?.length) {
      this.books = JSON.parse(local);
      this.showFavorite = true;
    } else if (local?.length == 0) {
      localStorage.removeItem('StorageBooks');
    } else {
      this.showFavorite = false;
    }
  }

  updateLocalStorage() {
    localStorage.setItem('StorageBooks', JSON.stringify(this.books));
  }

  showModal(item: Book) {
    showDetail(item);
  }

  onSearchTerm(term: string) {
    this.termino = term;
    if (term.length == 0) {
      this.dataSource = data;
    } else {
      const results = this.dataSource.library.filter(
        (item) =>
          item.book.title.toLowerCase().includes(term.toLowerCase()) ||
          item.book.genre.toLowerCase().includes(term.toLowerCase())
      );
      this.dataSource = { library: results };
    }
  }

  onRemoveBook(isbn: string): void {
    console.log(isbn);
    actionSucess('eliminado');
    this.books = this.books.filter((book) => book.book.ISBN !== isbn);
    this.updateLocalStorage();
  }

  saveBook(id: string) {
    console.log(id);
    const findBook = data.library.find((item) => item.book.ISBN === id);
    if (findBook) {
      const isBookAlreadyAdded = this.books.some(
        (book) => book.book.ISBN === findBook.book.ISBN
      );

      if (!isBookAlreadyAdded) {
        actionSucess('guardado');
        this.showFavorite = true;
        this.books.push(findBook as Book);
        this.updateLocalStorage();
      } else {
        warning();
      }
    }
  }
}
