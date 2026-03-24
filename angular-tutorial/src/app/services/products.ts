import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductAPIResponse } from './productDataType';

@Injectable({
  providedIn: 'root',
})
export class Products {
  apiUrl = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductAPIResponse>(this.apiUrl);
  }
}
