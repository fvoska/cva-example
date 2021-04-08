import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cvae-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.scss']
})
export class StartRatingComponent {
  @Input() numberOfStars!: number;
  @Input() public rating = 0;
  @Output() public ratingChange = new EventEmitter<number>();

  public onStarClick(newRating: number): void {
    this.rating = newRating;
    this.ratingChange.emit(newRating);
  }
}
