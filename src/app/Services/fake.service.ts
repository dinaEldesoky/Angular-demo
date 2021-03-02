import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeProduct } from '../ViewModels/fake-product';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private http : HttpClient ) { }

  getAllProducts() :Observable <FakeProduct>{
    return this.http.get<FakeProduct>('https://reqres.in/api/products');
  }
}
