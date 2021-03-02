import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsers } from '../ViewModels/iusers';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http : HttpClient) { }

  getAllUsers() :Observable <IUsers []>{
    return this.http.get<IUsers[]>(`${environment.API_URL}/users`);
  }
}
