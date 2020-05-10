import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {

  @Input() rating = 4;
  starWidth: number;
  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
    console.log('rrr : ', this.rating);
  }

  onClick() {
    this.ratingClicked.emit(`The raitin ${this.rating} was clicked `);
  }


}
