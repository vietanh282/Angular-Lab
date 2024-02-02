import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductAdmin } from '../../../types/Product';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DescriptionPipe } from '../../../pipes/description.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink, DescriptionPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {

  productService = inject(ProductService); // inject vao bien

  productList: ProductAdmin[] = [];


  ngOnInit(): void {
    this.productService
      .getProductListAdmin()
      .subscribe((products) => (this.productList = products)); // callApi.then(cb fuc)
  }
  // removeProduct(id: number) {
  //   console.warn(id)
  // }
  handleDeleteProduct(id: string) {
    if (window.confirm('Do you really remove Products?')) {
      this.productService
        .deleteProductById(id)
        .subscribe(
          () =>
          (this.productList = this.productList.filter(
            (product) => product._id !== id
          ))
        );
    }
  }

}
