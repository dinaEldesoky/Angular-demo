import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoryApiService } from 'src/app/Services/category-api.service';
import { AllOrders } from 'src/app/ViewModels/all-orders';
import { ICategory } from 'src/app/ViewModels/icategory';
import { OrderDetailComponent } from '../order-detail/order-detail.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit , AfterViewInit{
  Category:ICategory[]=[];
  selected=1;
  orders :AllOrders[]=[];
  orderFromOutput:number=0;
  @ViewChild('clientName') clientNameInput :ElementRef = new ElementRef('input');
  @ViewChild(OrderDetailComponent) DetailsComponentRef :any;
  constructor( private prdService : CategoryApiService) {
   
    // this.Category=[
    //   {ID:1 , Name:'Mobile'},
    //   {ID:2 , Name:'Laptop'}
    // ]
     }
  ngAfterViewInit(): void {
    console.log(this.clientNameInput.nativeElement.value);
    this.clientNameInput.nativeElement.style.backgroundColor = "lightgray";
    let childRef : OrderDetailComponent = this.DetailsComponentRef;
    console.log(childRef.selectedProd);
    this.orders=childRef.selectedProd;
    console.log(this.orders);
  }

  ngOnInit(): void {
    this.prdService.getAllCategories().subscribe(
      (response)=>{
        console.log("in subscribe");
        this.Category=response;
      },
      (err)=>{console.log(err)}
    );
  }
  onTotalPriceChange(totalPrice :number){
    this.orderFromOutput=totalPrice;
  }
}

 

