import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,
    private loginService: LoginService,
    public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
