import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'groupBy', standalone: true })
export class GroupByPipe implements PipeTransform {
  transform(array: any[], groupSize: number): any[][] {
    if (!Array.isArray(array) || groupSize < 1) return [];
    const result = [];
    for (let i = 0; i < array.length; i += groupSize) {
      result.push(array.slice(i, i + groupSize));
    }
    return result;
  }
}
