import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerUser = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  constructor(
    private userService: AuthService,
    private route:Router,
    private activeRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
  }
  handleSubmit() {
    console.log(this.registerUser);
    // validate required all + email, password  === confirmPassword
    // call api register user
    try {
      const user = {
        fullname: this.registerUser.fullname,
        email: this.registerUser.email,
        password: this.registerUser.password
      }
      // call service userSerive register
        this.userService.register(user).subscribe(() => {
        alert("Register Successfully !");
       
        //chuyển hướng tới login
        this.route.navigateByUrl("/login");       
      })
    } catch (error) {
      
      alert("Lỗi rồi");
    }
  }
}