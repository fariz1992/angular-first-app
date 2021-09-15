import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'azUppercase'
})
export class AzUppercasePipe implements PipeTransform {

  transform(value: string): unknown {
    return value.toLocaleUpperCase('az-Latn');
  }

}
