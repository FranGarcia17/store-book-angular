import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchBar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './searchBar.component.html',
})
export class SearchBarComponent {
  @Output() term = new EventEmitter<string>();
  search?: FormGroup;

  constructor(private fb: FormBuilder) {
    this.search = this.fb.group({
      field: [''],
    });

    this.search.get('field')?.valueChanges.subscribe((value) => {
      this.onTerm(value);
    });
  }

  onTerm(searchTerm: string): void {
    this.term.emit(searchTerm.trim());
  }
}
