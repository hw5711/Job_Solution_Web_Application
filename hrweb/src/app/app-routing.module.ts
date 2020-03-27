import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RetriveComponent } from './retrive/retrive.component';
import { ResetpasswordComponent } from './retrive/resetpassword/resetpassword.component';
import { HomeComponent } from './home/home.component';
import { WorkformComponent } from './workform/workform.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CandProfileComponent } from './cand-profile/cand-profile.component';
import { HrProfileComponent } from './hr-profile/hr-profile.component';
import { LoginGuard } from './login/login.guard';
import { JobspageComponent } from './jobspage/jobspage.component';
import { HrFormComponent } from './hr-form/hr-form.component';
import { ApplicationsComponent } from './applications/applications.component';
import { MyfavjobComponent } from './myfavjob/myfavjob.component';
import { JobappFormComponent } from './jobapp-form/jobapp-form.component';
import { JobappFormCreateComponent } from './jobapp-form/jobapp-form-create/jobapp-form-create.component';
import { JobappFormReviewComponent } from './jobapp-form/jobapp-form-review/jobapp-form-review.component';
import { PostJobComponent } from './post-job/post-job.component';
// import { ViewPostingComponent } from './view-posting/view-posting.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", component: HomeComponent },
  { path: "workform", component: WorkformComponent },
  { path: "retrive", component: RetriveComponent },
  { path: "valid/:token", component: ResetpasswordComponent },
  { path: "cand-profile", component: CandProfileComponent},
  { path: "hr-profile", component: HrProfileComponent},
  { path: "jobspage", component: JobspageComponent },
  { path: "cand-form", component: CandidateFormComponent },
  { path: "hr-form", component: HrFormComponent },
  { path: "applications", component: ApplicationsComponent},
  { path: "myfavjob", component: MyfavjobComponent},
  { path: "post_job", component: PostJobComponent },
  { path: "jobappform", component: JobappFormComponent },
  { path: "jobappform-create", component: JobappFormCreateComponent},
  { path: "jobappform-review", component: JobappFormReviewComponent},
  { path: "post-job", component: PostJobComponent },
  // { path: "view-posting", component: ViewPostingComponent },
  // { path: "view-applicants", component: ViewApplicantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

