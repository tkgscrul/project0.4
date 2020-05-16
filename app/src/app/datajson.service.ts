import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users'
  constructor(private _http: HttpClient) { }


getUsers(): Observable<User[]>{
  return this._http.get<User[]>(this.apiUrl);
}


}
