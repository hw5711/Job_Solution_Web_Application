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
  choice: any;
  same: boolean;
  selectedChoice: string;
  choices = [
    'HR',
    'Candidate',
  ];

  constructor(public authService: LoginService) { }

  ngOnInit() {}

  register(){
    if(this.password1 == this.password2){
      this.role = this.choice;
      this.authService.createUser(this.email, this.password1, this.role);
    }
  }

}
