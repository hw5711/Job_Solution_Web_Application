import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material';
import { MatStepperModule} from '@angular/material/stepper';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule} from '@angular/material/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostJobComponent } from './post-job/post-job.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RetriveComponent } from './retrive/retrive.component';
import { ResetpasswordComponent } from './retrive/resetpassword/resetpassword.component';
import { CandProfileComponent } from './cand-profile/cand-profile.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { HrProfileComponent } from './hr-profile/hr-profile.component';
import { JobspageComponent } from './jobspage/jobspage.component';
import { HrFormComponent } from './hr-form/hr-form.component';
import { ApplicationsComponent } from './applications/applications.component';
import { MyfavjobComponent } from './myfavjob/myfavjob.component';
import { JobappFormComponent } from './jobapp-form/jobapp-form.component';
import { JobappFormCreateComponent } from './jobapp-form/jobapp-form-create/jobapp-form-create.component';
import { JobappFormReviewComponent } from './jobapp-form/jobapp-form-review/jobapp-form-review.component';
import { ViewPostingComponent } from './view-posting/view-posting.component';
import { ViewApplicantsComponent } from './view-applicants/view-applicants.component';
import { JobspagePopupComponent } from './jobspage/jobspage-popup/jobspage-popup.component';
import { ApplicationsPopupComponent } from './applications/applications-popup/applications-popup.component';
import { MyfavjobPopupComponent } from './myfavjob/myfavjob-popup/myfavjob-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostJobComponent,
    RegisterComponent,
    HomeComponent,
    RetriveComponent,
    ResetpasswordComponent,
    CandProfileComponent,
    HrProfileComponent,
    JobspageComponent,
    CandidateFormComponent,
    HrFormComponent,
    ApplicationsComponent,
    MyfavjobComponent,
    JobappFormComponent,
    JobappFormCreateComponent,
    JobappFormReviewComponent,
    ViewPostingComponent,
    ViewApplicantsComponent,
    JobspagePopupComponent,
    ApplicationsPopupComponent,
    MyfavjobPopupComponent
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
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [JobspagePopupComponent, ApplicationsPopupComponent, MyfavjobPopupComponent],
})
export class AppModule { }
