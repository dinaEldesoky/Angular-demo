import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StaticproductsService } from 'src/app/Services/staticproducts.service';
import{Location} from '@angular/common';
import { ProductFrmApiService } from 'src/app/Services/product-frm-api.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  prd :any ;
  prdID:number = 1;

  constructor(private activatedRoute : ActivatedRoute , private prdService : ProductFrmApiService ,
    private location:Location, private router:Router) {}

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

  goBack(){
    this.location.back();
    console.log("back");
  }

  previous(){
    if(this.prdID>1){
      this.router.navigate(['/ProductsDetail' , (this.prdID-=1)]);
    }
  }

  next(){
    if(this.prdID<6){
    this.router.navigate(['/ProductsDetail' , (this.prdID +=1)]);
    }
  }
}
