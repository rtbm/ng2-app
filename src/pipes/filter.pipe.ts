import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })

export class FilterPipe implements PipeTransform {
  transform(items: any[], phrase: string, keys: string[] = []): any[] {
    const regexp = new RegExp(phrase, 'i');

    return items.filter(item => {
      if (!phrase) {
        return true;
      }

      if (!keys.length) {
        return item.match(regexp);
      }

      for (let n = keys.length - 1; n !== -1; n--) {
        if (item[keys[n]].match(regexp)) {
          return true;
        }
      }

      return false;
    });
  }
}
