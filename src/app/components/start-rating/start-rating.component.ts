import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cvae-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StartRatingComponent),
      multi: true,
    }
  ]
})
export class StartRatingComponent implements ControlValueAccessor {
  @Input() numberOfStars!: number;
  public disabled = false;
  public rating = 0;

  public onChange: (value: number) => void = () => null;
  public onTouched: () => void = () => null;

  public onStarClick(newRating: number): void {
    if (this.disabled) {
      return;
    }

    this.rating = newRating;
    this.onTouched();
    this.onChange(newRating);
  }

  public writeValue(rating: number): void {
    this.rating = rating;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
