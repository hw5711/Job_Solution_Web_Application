import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
<<<<<<< HEAD
import { WorkformComponent } from './workform/workform.component';
=======
import { RetriveComponent } from './retrive/retrive.component';
import { ResetpasswordComponent } from './retrive/resetpassword/resetpassword.component';

>>>>>>> 2e72500607feefde1e367fd2985c7ec0a19b1fe4

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FormComponent,
<<<<<<< HEAD
    WorkformComponent
=======
    RetriveComponent,
    ResetpasswordComponent
>>>>>>> 2e72500607feefde1e367fd2985c7ec0a19b1fe4
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
