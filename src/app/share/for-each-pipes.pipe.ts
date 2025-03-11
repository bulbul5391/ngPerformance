import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forEachPipes'
})
export class ForEachPipesPipe implements PipeTransform {

  transform(symbol: unknown, ...args: unknown[]): unknown {
    console.log("function calling from pipes");
    if(symbol == 'H')
    {
      return 'Height';
    }else if(symbol == 'W')
    {
      return 'Weight';
    }else{
      return 'Null'
    }
  }

}
