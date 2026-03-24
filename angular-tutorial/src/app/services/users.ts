import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersAPIResponse } from './userDataType';

@Injectable({
  providedIn: 'root',
})
export class Users {
  apiUrl = 'https://dummyjson.com/users';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<UsersAPIResponse>(this.apiUrl);
  }
}
