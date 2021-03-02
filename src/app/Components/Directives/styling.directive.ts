import { Directive , ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appStyling]'
})
export class StylingDirective  implements OnChanges ,OnInit{
  @Input () hoverColor:string | undefined;

  constructor(private elem:ElementRef) {
    elem.nativeElement.style.boxShadow = "10px 20px 30px lightblue";
    elem.nativeElement.style.borderRadius="25px";
    console.log("In constructor : "+this.hoverColor);
   }
  
  ngOnChanges(): void {
    console.log("In OnChanges : "+this.hoverColor);
    this.elem.nativeElement.style.backgroundColor=this.hoverColor;
  }

  ngOnInit(): void {
    //this.hoverColor="blue";
    //this.elem.nativeElement.style.backgroundColor=this.hoverColor;
    console.log("In OnInit : "+this.hoverColor);
  }

   @HostListener('mouseover') onMouseOver(){
    this.elem.nativeElement.style.boxShadow = "10px 30px 30px blue";
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elem.nativeElement.style.boxShadow = "10px 20px 30px lightblue ";
  }

  
}


