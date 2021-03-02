import { Directive , ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStylingInput]'
})
export class StylingInputDirective {

  constructor(private elem : ElementRef) {

   }
   @HostListener('blur') inputBlur(){
     let val = this.elem.nativeElement.value;
     if(this.elem.nativeElement.value.length==16){
       this.elem.nativeElement.style.backgroundColor = "gray";
       this.elem.nativeElement.value = val.substring(0,4)+"-"+val.substring(4,8)+"-"+val.substring(8,12)+"-"+val.substring(12,16);
     }
     else{
      this.elem.nativeElement.style.backgroundColor = "red";
     }
   }
}
