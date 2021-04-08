import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayOfNumbers'
})
export class ArrayOfNumbersPipe implements PipeTransform {
  public transform(length: number): Array<number> {
    const numbers = [];

    for (let i = 1; i <= length; i++) {
      numbers.push(i);
    }

    return numbers;
  }
}
