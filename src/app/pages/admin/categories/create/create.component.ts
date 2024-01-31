import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../../services/category.service';
import { Router } from '@angular/router';
import { Category } from '../../../../types/Category';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreatecateComponent {
  categoryService = inject(CategoryService); // inject vao bien
  router = inject(Router);
 
  categoryList: Category[] = [];

  ngOnInit(): void {
    this.categoryService
      .getCategoryListAdmin()
      .subscribe((categories) => (this.categoryList = categories)); // callApi.then(cb fuc)
  }
  handleSubmit() {
    // console.log(this.productAdd);
    // this.categoryService
    //   .createCategory(this.CategoryAdd)
    //   .subscribe(() => this.router.navigate(['/admin/category']));
    // call service api POST products
  }
}
