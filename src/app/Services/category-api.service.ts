import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../ViewModels/icategory';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private http : HttpClient ) { }

  getAllCategories() :Observable <ICategory []>{
    return this.http.get<ICategory[]>(`${environment.API_URL}/Categories`);
  }
 
}
