import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRatingComponent } from './start-rating.component';
import { ArrayOfNumbersPipe } from './array-of-numbers.pipe';



@NgModule({
  declarations: [
    StartRatingComponent,
    ArrayOfNumbersPipe
  ],
  exports: [StartRatingComponent],
  imports: [
    CommonModule
  ]
})
export class StartRatingModule { }
