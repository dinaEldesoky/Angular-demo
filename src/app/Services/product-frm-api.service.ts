import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IProduct } from '../ViewModels/iproduct';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICategory } from '../ViewModels/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductFrmApiService {
  constructor(private http : HttpClient ) { }

  getAllProducts() :Observable <IProduct []>{
    return this.http.get<IProduct[]>(`${environment.API_URL}/products`);
  }

  getProductByID(pID: number): Observable <IProduct>
  {
    return this.http.get<IProduct>(`${environment.API_URL}/products/${pID}`);
  }


  getCategoryByID(cID: number): Observable <IProduct []>
  {
    return this.http.get<IProduct []>(`${environment.API_URL}/products?CatigoryId=${cID}`);
  }


  
  addProduct(prd: IProduct):Observable<any>
  {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
      
    return this.http.post<any>(`${environment.API_URL}/products`,prd, httpOptions);
  }
}
