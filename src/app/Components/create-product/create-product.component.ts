import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryApiService } from 'src/app/Services/category-api.service';
import { ProductFrmApiService } from 'src/app/Services/product-frm-api.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  productForm = this.fb.group({
    Name:['',Validators.required],
    Quantity:['',Validators.required],
    Price:['',Validators.required],
    CategoryId:['',Validators.required]
  })

  list:IProduct;
  CatList:ICategory[]=[];

  constructor(private fb:FormBuilder ,private cat : CategoryApiService,private prdService:ProductFrmApiService ,private router:Router) {
    this.list={Name:'',Quantity:0,Price:1,CatigoryId:1};
  }

  ngOnInit(): void {
    this.cat.getAllCategories().subscribe(
      (response)=>{
        console.log("in subscribe");
        this.CatList=response;
      },
      (err)=>{console.log(err)}
    );
  }

  addProduct(){

    this.list=this.productForm.value;
    
    this.prdService.addProduct(this.list).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['/About']);
      },
      (err)=>{console.log(err)}
    );

    console.log(this.productForm.value);
  }
}
