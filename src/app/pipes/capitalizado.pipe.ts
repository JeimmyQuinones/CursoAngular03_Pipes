import { Pipe, PipeTransform } from '@angular/core';
import { Console } from 'console';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean): string {
    value= value.toLowerCase();
    let nombres = value.split(' ');

    if(todas){
        return value.toUpperCase();
    }else{
      for(let i=0; i<Number.length+1; i++){
        nombres[i]=nombres[i][0].toUpperCase()+ nombres[i].substring(1);
      }
    }
    return nombres.join(' ');
  }

}
