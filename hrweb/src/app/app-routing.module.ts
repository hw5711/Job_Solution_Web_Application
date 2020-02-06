import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RetriveComponent } from './retrive/retrive.component';
import { ResetpasswordComponent } from './retrive/resetpassword/resetpassword.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { WorkformComponent } from './workform/workform.component';

import { LoginGuard } from "./login/login.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
<<<<<<< HEAD
  { path: "home", component: HomeComponent },
  { path: "form", component: FormComponent },
  { path: "workform", component: WorkformComponent }
=======
  { path: "", component: HomeComponent },
  { path: "form", component: FormComponent },
  { path: "retrive", component: RetriveComponent },
  { path: "reset", component: ResetpasswordComponent }
>>>>>>> 2e72500607feefde1e367fd2985c7ec0a19b1fe4
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
