import { Component, OnInit } from '@angular/core';
import { Discount } from 'src/app/Enums/discount.enum';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { Store } from 'src/app/ViewModels/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  
  StoreInfo:Store;
  clinetName:string;
  ProductList:IProduct[];
  Category:ICategory[];
  
  IsOpen:boolean;
  date:Date;

  cardNumber="";
  NationalID="";
  dis:Discount;
  
  selected=0;

  constructor() { 
    this.dis=Discount.low;
    
    this.StoreInfo= new Store('ITI' , ['Smart Village','Alex' , 'Sohag' ,'Aswan'], '../../../assets/river-5572289_1920.jpg');
    this.ProductList=[
      {id:1, Name :'Samsung 1' , Quantity:3 , Price:2000, CatigoryId:1 },
      {id:2, Name :'Samsung 2' , Quantity:5 , Price:3000 , CatigoryId:2 },
      {id:3, Name :'Samsung 3' , Quantity:4 , Price:4000 , CatigoryId:1 },
      {id:4, Name :'Samsung 4' , Quantity:1 , Price:5000 ,CatigoryId:1 },
      {id:5, Name :'Samsung 5' , Quantity:0 , Price:5000 ,CatigoryId:2 },
      {id:5, Name :'Samsung 5' , Quantity:1 , Price:5000 ,CatigoryId:2 }
  ]

  this.IsOpen=true;
  this.date=new Date();
  this.clinetName="Dina";

  this.Category=[
    {id:1 , Name:'Phone'},
    {id:2 , Name:'LapTop'}
  ]
  }
  
  toggleTable(){
    this.IsOpen =! this.IsOpen ;
  }

 

}
