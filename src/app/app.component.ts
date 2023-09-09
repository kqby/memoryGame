import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() card!: Card;
  cards: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  showData(data: Number) {
    console.log(data);
  }
}
