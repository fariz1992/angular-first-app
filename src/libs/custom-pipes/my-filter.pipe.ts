import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(list: string[], ...args: string[]): string[] {
    /*let herf: string = args[0];
    let yeniList: string[] = [];

    list.forEach(item => {
      let varmi = item.includes(herf);
      if (varmi) {
        yeniList.push(item);
      }
    });

    return yeniList;
    */ 
    return list.filter(item => item.includes(args[0])); 
  }

}
