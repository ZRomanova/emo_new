import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], search: string = '', field: string): User[] {
    if (!search.trim()) {
      return users
    }
    return users.filter(user => {
      if (field == 'surname') {
        return user.surname.toLowerCase().includes(search.toLowerCase())
      }
      else {
        return user.name.toLowerCase().includes(search.toLowerCase())
      }
    })
  }
}
