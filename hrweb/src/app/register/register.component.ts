import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from "../login/login.service";
import { ToastContainerDirective } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

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
  choices = [
    'HR',
    'Candidate',
  ];

  constructor(
    public authService: LoginService, 
    private toastrService: ToastrService) { 
      this.toastrService.overlayContainer = this.toastContainer;
    }

  ngOnInit() {
    this.toastrService.overlayContainer = this.toastContainer;
  }

  register(){
    if(this.password1 == this.password2){
      this.role = this.choice;
      this.authService.createUser(this.email, this.password1, this.role);
    }
    else{
      this.onClick();
    }
  }

  onClick() {
    this.toastrService.error('confirmed password should be the same');
  }

}
