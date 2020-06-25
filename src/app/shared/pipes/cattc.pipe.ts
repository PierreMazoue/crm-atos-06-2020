import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/client';

@Pipe({
  name: 'cattc'
})
export class CattcPipe implements PipeTransform {

  transform(value: Client, ...args: any[]): any  {
    if (value) {
      return (value.ca) * (1 + value.tva / 100);
    }
    return null;
  }

}
