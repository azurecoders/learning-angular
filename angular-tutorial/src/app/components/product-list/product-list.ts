import { Component, signal } from '@angular/core';
import { Products } from '../../services/products';
import { Product } from '../../services/productDataType';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  constructor(private productsService: Products) {}

  productsData = signal<Product[]>([]);

  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.productsData.set(data.products);
    });
  }
}
