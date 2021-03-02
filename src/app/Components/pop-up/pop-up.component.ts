import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StaticproductsService } from 'src/app/Services/staticproducts.service';
import{Location} from '@angular/common';
import { ProductFrmApiService } from 'src/app/Services/product-frm-api.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(private prdService:ProductFrmApiService ,private location:Location ,private activatedRoute : ActivatedRoute ,private router:Router) { }
  prd :any ;
  prdID:number = 1;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let prdIDParam: string | null = params.get('pId');
      this.prdID = (prdIDParam) ? parseInt(prdIDParam) : 0;
      

      this.getProductsByID(this.prdID);

    },
      (err) => { console.log(err) }
    );
    
  }

  private getProductsByID(pID: number) {
    
      this.prdService.getProductByID(pID).subscribe(
        (res) => {
          this.prd = res;
        }
        , (err) => { console.log(err) });

   
  }

  
  previous(){
    if(this.prdID>1){
      this.router.navigate(['/PopupProducts' , (this.prdID-=1)]);
    }
  }

  next(){
    if(this.prdID<6){
    this.router.navigate(['/PopupProducts' , (this.prdID +=1)]);
    }
  }
}
