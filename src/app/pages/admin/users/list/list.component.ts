import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../types/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListuserComponent {
  LIMIT = 6;
  userService = inject(UserService); // inject vao bien
  totalPages: number[] = [];
  searchText = '';
  userList: User[] = [];
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    // Lay searchText From Url
    this.route.queryParams.subscribe((params) => {
      this.searchText = params['search'];
      return this.userService
        .getUserListAdmin(this.searchText, 1)
        .subscribe((res) => {
          this.userList = res.data;
          this.totalPages = this.convertArrayNumber(res.total);
        });
    });
  }

  handleDeleteUser(id: string) {
    if (window.confirm('Do you really remove user?')) {
      this.userService
        .deleteUser(id)
        .subscribe(
          () =>
            (this.userList = this.userList.filter((user) => user._id !== id))
        );
    }
  }

  handleSearch() {
    return this.userService
      .getUserListAdmin(this.searchText, 1)
      .subscribe((res) => {
        this.userList = res.data;
        this.totalPages = this.convertArrayNumber(res.total);
      });
  }
  handleChangePage(page: number) {
    return this.userService
      .getUserListAdmin(this.searchText, page)
      .subscribe((res) => {
        this.userList = res.data;
        this.totalPages = this.convertArrayNumber(res.total);
      });
  }

  convertArrayNumber(value: number) {
    return Array.from(
      { length: Math.ceil(value / this.LIMIT) },
      (_, key) => key + 1
    );
  }
}
