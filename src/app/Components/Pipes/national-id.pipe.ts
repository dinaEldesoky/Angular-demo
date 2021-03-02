import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalID'
})
export class NationalIDPipe implements PipeTransform {

  transform(value: string , val:string=''): string {
   
    if(val=='YY'){
      if(value.substring(0,1)=='3')
      return "19"+value.substring(1,3)
      else 
      return "20"+value.substring(1,3);

    }
    else if(val=='MM'){
      return value.substring(3,5)
    }
    else if(val =='DD'){
      return value.substring(5,7);
    }
     
    if(value.substring(0,1)=='3')
    return value.substring(5,7)+"-"+value.substring(3,5) +"- 19"+value.substring(1,3);
    else{
    return value.substring(5,7)+"-"+value.substring(3,5) +"- 20"+value.substring(1,3);

    }
  }
//39912034000111
}
