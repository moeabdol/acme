import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _router: Router,
    private _productService: ProductService) {
    console.log(this._route.snapshot.params['id']);
  }

  ngOnInit(): void {
    const id = +this._route.snapshot.params['id'];
    this.pageTitle += `: ${id}`;
    this.getProduct(id);
  }

  getProduct(id: number): void {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product Detail: ${message}`;
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
