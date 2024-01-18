import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CategoryService } from '../../../services/category.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Category } from '../../../types/Category';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  categoryService = inject(CategoryService); // inject vao bien
  productService = inject(ProductService); // inject vao bien
  router = inject(Router);
  productAdd = {
    title: '',
    price: 0,
    description: '',
    image: '',
    rate: 0,
    category: ''
  };
  categoryList: Category[] = [];

  ngOnInit(): void {
    this.categoryService
      .getCategoryListAdmin()
      .subscribe((categories) => (this.categoryList = categories)); // callApi.then(cb fuc)
  }
  handleSubmit() {
    // console.log(this.productAdd);
    this.productService
      .createProduct(this.productAdd)
      .subscribe(() => this.router.navigate(['/admin/products']));
    // call service api POST products
  }
}
