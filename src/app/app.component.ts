import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cvae-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isFormSubmitted = false;
  public readonly numberOfStars = 5;
  public readonly form = this.createForm();

  public onSubmit(): void {
    this.isFormSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }

  public onRatingChange(newRating: number): void {
    this.form.get('rating')?.setValue(newRating);
  }

  private createForm(): FormGroup {
    const title = new FormControl('', [Validators.required]);
    const releaseYear = new FormControl(null, [Validators.required]);
    const enableRating = new FormControl(true);
    const rating = new FormControl(
      null,
      [
        Validators.required,
        Validators.min(2),
        Validators.max(this.numberOfStars)
      ]
    );

    enableRating.valueChanges.subscribe((isRatingEnabled) => {
      if (isRatingEnabled) {
        rating.enable();
      } else {
        rating.disable();
      }
    });

    return new FormGroup({
      title,
      releaseYear,
      enableRating,
      rating,
    });
  }
}
