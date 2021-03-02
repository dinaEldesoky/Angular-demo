import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductFrmApiService } from 'src/app/Services/product-frm-api.service';
import { AllOrders } from 'src/app/ViewModels/all-orders';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit ,OnChanges{

  prodSelCat:IProduct[]=[];
  orderTotalPrice :number=0;
  selectedProd:AllOrders[]=[];
  newProduct: IProduct={id: 8, Name: "Lenvo thinpad", Price: 1000, Quantity: 11, CatigoryId: 1, Img: "https://picsum.photos/200"}

  @Input() inputCatID:number=0;

  @Output() totalPriceChange:EventEmitter<number> =new EventEmitter<number>();

  
  constructor(private prdService:ProductFrmApiService , private router:Router) { }

  ngOnChanges(changes: SimpleChanges): void {

     this.prdService.getCategoryByID(this.inputCatID).subscribe(
      (res) => {
        console.log(res);
        this.prodSelCat = res;
      }
      , (err) => { console.log(err) });;
      console.log(this.inputCatID);
      console.log(this.prodSelCat);
      console.log("onChanges")
  }

   ngOnInit(): void {
    this.prdService.getAllProducts().subscribe(
      (response)=>{
        console.log("in subscribe");
        this.prodSelCat=response;
      },
      (err)=>{console.log(err)}
    );
   }
 
   
CalcTotalPrice(prdPrice:number ,items:string ,prodName:string ){
  this.orderTotalPrice+=prdPrice* parseInt(items);
  this.totalPriceChange.emit(this.orderTotalPrice);
  this.selectedProd.push({Name:prodName,Item:items});
  console.log(this.selectedProd);
}

viewProduct(proID:number | undefined){
  this.router.navigate(['/ProductsDetail' , proID]);
}

openPopup(proID:number | undefined){
  this.router.navigate(['/PopupProducts' , proID]);
}

addProduct(){
  this.prdService.addProduct(this.newProduct).subscribe(
    (res)=>{
      console.log(res);
      this.router.navigate(['/About']);
    },
    (err)=>{console.log(err)}
  );
}

}

