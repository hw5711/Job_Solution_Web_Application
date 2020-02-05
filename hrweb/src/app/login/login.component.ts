import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  role: string;
  choice: any;
  selectedChoice: string;
  choices = [
    'HR',
    'Candidate',
  ];

  constructor(private http: HttpClient,
    private loginService: LoginService,
    public route: ActivatedRoute) { }

  ngOnInit() {}
    // this.isLoading = true;
    login(){
    
    this.role = this.choice;
    this.loginService.login(this.email, this.password, this.role);
  }

  // retrivePassword() {
  //   // console.log("entered email: ",this.email); 
  //   this.loginService.retrivePassword(this.email);
  //   this.sent = true;
  // }

}
