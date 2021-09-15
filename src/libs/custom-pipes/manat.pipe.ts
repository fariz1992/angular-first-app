import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'manat'
})
export class ManatPipe implements PipeTransform {

  transform(value: number): unknown {
    return "₼ " +value.toFixed(2);
  }

}
