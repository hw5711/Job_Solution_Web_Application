import { Component, OnInit } from '@angular/core';

import { LoginService } from "../login/login.service";


@Component({
  selector: 'app-jobapp-form',
  templateUrl: './jobapp-form.component.html',
  styleUrls: ['./jobapp-form.component.css']
})
export class JobappFormComponent implements OnInit {

  userId: string;

  storedJobapps = [];

  onJobappAdded(jobapp) {
    this.storedJobapps.push(jobapp);
  } 

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.userId = this.loginService.getUserId()
    console.log("user_id is: " + this.userId)
  }
  
}
