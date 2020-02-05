
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
// import { AuthService } from '../login/login.service';
import { LoginService } from "../login/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrive',
  templateUrl: './retrive.component.html',
  styleUrls: ['./retrive.component.css']
})
export class RetriveComponent implements OnInit {
  RequestResetForm =new FormGroup({
    email: new FormControl()
  });
  // RequestResetForm :FormGroup;
  forbiddenEmails: any;
  errorMessage: string;
  successMessage: string;
  IsvalidForm = true;

  constructor(
    private authService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {}

  RequestResetUser(form) {
    console.log(form)
    if (form.valid) {
      this.IsvalidForm = true;
      this.authService.requestReset(this.RequestResetForm.value).subscribe(
        data => {
          this.RequestResetForm.reset();
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
    } else {
      this.IsvalidForm = false;
    }
  }

}
