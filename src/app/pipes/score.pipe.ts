import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number): string {
    if(value<0) return "- "+(-value); 
    if(value>0) return "+ "+value;
    return "0";
    //return null;
  }

}
