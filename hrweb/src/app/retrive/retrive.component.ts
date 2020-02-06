
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from "../login/login.service";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-retrive',
  templateUrl: './retrive.component.html',
  styleUrls: ['./retrive.component.css']
})
export class RetriveComponent implements OnInit {

  RequestResetForm :FormGroup;
  forbiddenEmails: any;
  errorMessage: string;
  successMessage: string;
  IsvalidForm = true;
  inputEmail : string;

  constructor(
    private http: HttpClient, 
    private router: Router
  ) { }

  ngOnInit() {
    this.RequestResetForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
    });
  }

  RequestResetUser(form) {
    console.log(this.RequestResetForm.value.email)
  }
  request(){

    // if (form.valid) {
    //   this.IsvalidForm = true;
      this.http
        .post("http://localhost:3000/retrive", { email: this.RequestResetForm.value.email })
      .subscribe(response => {
          // this.RequestResetForm.reset();
          this.successMessage = "Reset password link send to email sucessfully.";
          setTimeout(() => {
            this.successMessage = null;
            this.router.navigate(['login']);
          }, 3000);
        },
        err => {
          if (err.error.message) {
            this.errorMessage = err.error.message;
          }
        }
      );
    } 
    // else {
    //   this.IsvalidForm = false;
    // }

}
