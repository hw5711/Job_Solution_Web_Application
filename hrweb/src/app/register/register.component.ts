import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoginService } from "../login/login.service";
import { ToastContainerDirective } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";
import { LoginData } from "../login/login_data.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  email: string;
  password1 : string;
  password2: string;
  role : string;
  choice: any;
  same: boolean;
  selectedChoice: string;
  meg: string;
  errormeg: string;
  
  choices = [
    'HR',
    'Candidate',
  ];

  constructor(
    public authService: LoginService, 
    private toastrService: ToastrService,
    private http: HttpClient, private router: Router) { 
      this.toastrService.overlayContainer = this.toastContainer;
    }

  ngOnInit() {
    this.toastrService.overlayContainer = this.toastContainer;
  }

  register(form: NgForm){

    if(this.password1 == this.password2){
      this.role = this.choice;
      const authData: LoginData = { email: form.value.email, password: form.value.password , role: this.choice};
      this.http
        .post("http://localhost:3000/register", authData)
          // .post("register", authData)
          .subscribe(response => {
              this.meg = response["message"];
              console.log("show detail of response :", this.meg);
            this.router.navigate(["login"]);
          },
          error=>{
            this.meg = error.message;
            console.log("error is", this.meg);
          });
    }else{
      this.onClick();
    }
  }

  onClick() {
    this.toastrService.error('confirmed password should be the same');
  }

  onClick1() {
    this.toastrService.warning('accoun exists');
  }

}
