import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password1 : string;
  password2: string;
  role : string;
  choices = [
    'HR',
    'Candidate',
  ];

  constructor(public authService: LoginService) { }

  ngOnInit() {
    // if (form.invalid) {
    //   return;
    }
  register(){
    if(this.password1 == this.password2){
      this.authService.createUser(this.email, this.password1, this.role);
      console.log("register!", this.password1, this.role);
    }
  }

}
