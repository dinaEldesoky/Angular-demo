import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryApiService } from 'src/app/Services/category-api.service';
import { ProductFrmApiService } from 'src/app/Services/product-frm-api.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  newProduct:IProduct | undefined;
  CatList :ICategory []=[];
  selected=1;
  prdName:string ='';
  prdQuantity : number=1;
  prdPrice : number = 1;
  
  constructor(private prdService : ProductFrmApiService ,private catServ:CategoryApiService,private router:Router) { }

  ngOnInit(): void {
    this.catServ.getAllCategories().subscribe(
      (response)=>{
        console.log("in subscribe");
        this.CatList=response;
      },
      (err)=>{console.log(err)}
    );
  }

  addProduct(){
    this.newProduct={Name : this.prdName , Quantity:this.prdQuantity,Price:this.prdPrice,CatigoryId:this.selected};
    this.prdService.addProduct(this.newProduct).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['/About']);
      },
      (err)=>{console.log(err)}
    );
  }
  
}
