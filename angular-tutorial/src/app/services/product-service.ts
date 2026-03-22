import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    console.log('Product Service Called');
  }

  getProducts() {
    return [
      {
        id: 1,
        name: 'Samsung Phone',
        price: 100,
      },
      {
        id: 22,
        name: 'Apple Phone',
        price: 5000,
      },
      {
        id: 3,
        name: 'Vivo Phone',
        price: 200,
      },
    ];
  }
}
