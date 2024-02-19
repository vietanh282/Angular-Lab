import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { CreateComponent } from './pages/admin/create/create.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent} from './pages/admin/categories/list/list.component';
import { ListuserComponent } from './pages/admin/users/list/list.component';
import { CreatecateComponent } from './pages/admin/categories/create/create.component';
import { EditcateComponent } from './pages/admin/categories/edit/edit.component';
import { CreateuserComponent } from './pages/admin/users/create/create.component';
import { EdituserComponent } from './pages/admin/users/edit/edit.component';
export const routes: Routes = [
  // route '/' = page Home
  // path, component
  { path: '', component: HomeComponent },
  // { path: 'admin', component: ProductsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'products/create', component: CreateComponent },
      { path: 'products/edit/:id', component: EditComponent },
      { path: 'categories/list', component: ListComponent },
      { path: 'categories/create', component: CreatecateComponent },
      { path: 'categories/edit/:id', component: EditcateComponent },
      { path: 'users/list', component: ListuserComponent },
      { path: 'users/create', component: CreateuserComponent },
      { path: 'users/edit/:id', component: EdituserComponent },
    ],
  },
];
// test lỗi
// test lỗi
// test lỗi
// test lỗi
// test lỗi
// test lỗi