import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book.model';
import { showDetail } from '../../utils/helper';

@Component({
  selector: 'app-favoritesBooks',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
})
export class FavoriteComponent {
  @Input() favoriteBooks: Book[] = [];
  @Output() removeBook = new EventEmitter<string>();
  

  onRemoveBook(isbn: string): void {
    console.log(isbn);
    this.removeBook.emit(isbn);
  }

  showModal(item: Book) {
    showDetail(item);
  }
}
