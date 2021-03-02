import { Component, OnInit } from '@angular/core';
import { ProductFrmApiService } from 'src/app/Services/product-frm-api.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {
  productList :IProduct []=[];
  constructor(private prdService : ProductFrmApiService) { }

  ngOnInit(): void {
    this.prdService.getAllProducts().subscribe(
      (response)=>{
        console.log("in subscribe");
        this.productList=response;
      },
      (err)=>{console.log(err)}
    );
  }

}
