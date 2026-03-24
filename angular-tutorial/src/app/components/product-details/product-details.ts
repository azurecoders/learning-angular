import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../services/products';
import { Product } from '../../services/productDataType';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  productData = signal<Product | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private product: Products,
  ) {}

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id');
    this.product.getProducts().subscribe((data) => {
      this.productData.set(data.products.filter((item) => item.id.toString() == productId)[0]);
    });
  }
}
