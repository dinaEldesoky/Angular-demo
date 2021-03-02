import { Component, OnInit } from '@angular/core';
import { FakeService } from 'src/app/Services/fake.service';
import { FakeProduct } from 'src/app/ViewModels/fake-product';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-fake-api',
  templateUrl: './fake-api.component.html',
  styleUrls: ['./fake-api.component.scss']
})
export class FakeApiComponent implements OnInit {

  productList:any;
  constructor(private prdService : FakeService) { }

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
