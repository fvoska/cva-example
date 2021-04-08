import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cvae-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly numberOfStars = 5;

  public readonly form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    releaseYear: new FormControl(null, [Validators.required]),
    rating: new FormControl(null, [Validators.required, Validators.min(2), Validators.max(this.numberOfStars)])
  });

  public onRatingChange(newRating: number): void {
    this.form.get('rating')?.setValue(newRating);
  }
}
