import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  productId: string | undefined = '1';

  productEdit = {
    title: 'SPA ',
    price: 1,
    description: 'asd',
    image: 'asdasd',
    rate: 3,
  };

  constructor() {
    // call api get
  }

  getProductDetail() {
    if (!this.productId) return;
    //call service ProductDetail(id).subcrib(product => this.productEdit  = product)
  }

  handleSubmit() {
    console.log(this.productId); // lam sao lay dc

    console.log(this.productEdit);
    // call service api POST products
  }
}


// import { NgFor } from '@angular/common';
// import { Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Category } from '../../../types/Category';
// import { CategoryService } from '../../../services/category.service';
// import { ProductService } from '../../../services/product.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProductAdd } from '../../../types/Product';

// @Component({
//   selector: 'app-edit',
//   standalone: true,
//   imports: [FormsModule,NgFor],
//   templateUrl: './edit.component.html',
//   styleUrl: './edit.component.css'
// })
// export class EditComponent {
//   productId: number | undefined ;

//   categories: Category[] = [];
//   categoryService = inject(CategoryService);

//   productEdit: ProductAdd = {
//     title: 'hiii',
//     description: 'hiiii',
//     image: '123',
//     category: '',
//     price: 0,
//   };

//   productService = inject(ProductService);
//   router = inject(Router);
//   route = inject(ActivatedRoute);

//   ngOnInit(): void {
//     this.route.params.subscribe((param) => {
//       this.productId = param['id'];
//       return this.getProductById();
//     });

//     this.categoryService
//       .getCategoryListAdmin()
//       .subscribe((categories) => (this.categories = categories));
//   }
//   getProductById() {
//     if (!this.productId) return;
//     return this.productService
//       .getProductDetail(this.productId)
//       .subscribe((product) => (this.productEdit = product));
//   }
  

//   handleSubmitForm() {
//     if (!this.productId) return;
//     if (!this.productEdit.title) return alert('sửa san pham');
//     this.productService
//       .updateProduct(this.productId, this.productEdit)
//       .subscribe(() => this.router.navigate(['/admin/products']));
//   }
// }
