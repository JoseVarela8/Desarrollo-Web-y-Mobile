import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {
  transform(inputArray: any[], chunkSize: number): any[][] {
    if (!inputArray || !Array.isArray(inputArray)) {
      return [];
    }

    const result: any[][] = [];
    for (let i = 0; i < inputArray.length; i += chunkSize) {
      result.push(inputArray.slice(i, i + chunkSize));
    }
    return result;
  }
}
