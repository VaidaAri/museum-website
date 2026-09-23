import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-publications',
  imports: [NgIf],
  templateUrl: './publications.html',
  styleUrl: './publications.scss',
})
export class Publications {
  selectedCategory = 'arhivaSomesana';

  switchCategory(category: string) {
    this.selectedCategory = category;
  }
}