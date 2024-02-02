import { Component, NgModule, inject } from '@angular/core';
import { Category, CategoryAdd } from '../../../../types/Category';
import { CategoryService } from '../../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditcateComponent {
  categoryId: string | undefined;
  categoryEdit: CategoryAdd = {
    title: '',
    description: '',
    slug: ''
  };
  categoryService = inject(CategoryService); // inject vao bien
  router = inject(Router);

  route = inject(ActivatedRoute);

  ngOnInit(): void {
    // Lay ProductId From Url
    this.route.params.subscribe((param) => {
      this.categoryId = param['id'];
      return this.getCategoryDetail();
    });
  }
  getCategoryDetail() {
    if (!this.categoryId) return;
    this.categoryService
      .getDetailCategoryById(this.categoryId)
      .subscribe(
        (category) =>
          (this.categoryEdit = category)
      );
  }

  handleSubmit() {
    if (!this.categoryId) return;
    this.categoryService
      .updateCategoryById(this.categoryEdit, this.categoryId)
      .subscribe(() => this.router.navigate(['/admin/categories/list']));
    // call service api POST products
  }
}

