import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { LoginService } from "./login.service";
import { ToastContainerDirective } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;


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
    public route: ActivatedRoute,
    private toastrService: ToastrService) { 
    }

  ngOnInit() {
    this.toastrService.overlayContainer = this.toastContainer;
  }
  
  // this.isLoading = true;

  login(){
      this.role = this.choice;
      this.loginService.login(this.email, this.password, this.role);
  }

  onClick() {
    this.toastrService.error('wrong password or role must match');
  }


  // retrivePassword() {
  //   // console.log("entered email: ",this.email); 
  //   this.loginService.retrivePassword(this.email);
  //   this.sent = true;
  // }

}
