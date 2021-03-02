import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatInput'
})
export class FormatInputPipe implements PipeTransform {

  transform(value:string , val:string=''): string {

     if(value.length==16){
      
       val = value.substring(0,4)+"-"+value.substring(4,8)+"-"+value.substring(8,12)+"-"+value.substring(12,16);
     }
  
     return val;
   }

    
  
}
