import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../types/User';

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
  users!: User[];
  constructor(
    private userService: UserService,
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
      console.log(this.users);
      // call service userSerive register
        this.userService.register(this.users).subscribe(() => {
        alert("Register Successfully !");
       
        //chuyển hướng tới login
        this.route.navigateByUrl("/login");       
      })
    } catch (error) {
      
      alert("Lỗi rồi");
    }
  }
}