import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticproductsService {
  private ProductList:IProduct[];

  constructor() {
    
      this.ProductList=[
        {id:1, Name :'Samsung 1' , Quantity:3 , Price:200, CatigoryId:1 },
        {id:2, Name :'Samsung 2' , Quantity:5 , Price:300 , CatigoryId:1 },
        {id:3, Name :'Samsung 3' , Quantity:4 , Price:400 , CatigoryId:1 },
        {id:4, Name :'Samsung 4' , Quantity:1 , Price:500 ,CatigoryId:2 },
        {id:5, Name :'Samsung 5' , Quantity:2 , Price:600 ,CatigoryId:2 },
        {id:6, Name :'Samsung 6' , Quantity:1 , Price:700 ,CatigoryId:2 }
    ]
   }

   getAllProducts () :IProduct[] {
    return this.ProductList;
   }
   
   getProductByCatId(catId:number):IProduct[]{
    return this.ProductList.filter((prod)=>{
      return prod.CatigoryId == catId;
    })
  }

  getProductById(prdId:number) :IProduct | null{
    let foundPrd = (this.ProductList.find((prd)=>
      prd.id==prdId
    ));
    return (foundPrd) ? foundPrd : null;
  }
}
