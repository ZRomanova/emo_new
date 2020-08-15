import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'easyLang'
})
export class EasyLangPipe implements PipeTransform {

  transform(str: string): string {
    str = str.toUpperCase();
    for(let letter of str) {
      if (letter == 'А' || letter ==  'О' || letter == 'У' || letter == 'Ы' || letter == 'Э' || letter == 'Я' || letter == 'Ё' || letter == 'Ю' || letter == 'И' || letter == 'Е') {
        letter = "<span class = red>" + letter + "</span>";
      }
    }
    return `${str}`;
  }

}
