import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component ({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})


export class StarRatingComponent implements OnChanges {

  public starWidth: number;

  @Input()
  public rating: number;

  @Output()
  public starRatingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 125 / 5;
  }

  public sendRating(): void {
    this.starRatingClicked.emit(`La note de ${this.rating} a été cliquée}`);
  }
}