import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
  standalone: true
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value < 1 || value > 999) {
      throw new Error('Value must be between 1 and 999');
    }
    
    // Convert the number to a string and pad with leading zeros
    const formattedNumber = value.toString().padStart(3, '0');
    return `#${formattedNumber}`;
  }

}
