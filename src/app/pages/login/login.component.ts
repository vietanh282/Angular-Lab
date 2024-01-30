import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  registerUser = {
    email: '',
    password: '',
  };
  constructor(
    private userService: AuthService,
    private route:Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
   
    try {
      console.log(this.registerUser);
      // call service userSerive register
       const register = this.userService.login(this.registerUser).subscribe(() => {
        alert("Login Successfully !");
    
        // chuyển hướng tới login
        this.route.navigateByUrl("/");
        // if (!data) {
        //   alert("Lỗi rồi")
        // }
      })
    
    } catch (error) {
      console.log("Lỗi rồi");
      
    }
  }
  
}
