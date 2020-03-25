import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RetriveComponent } from './retrive/retrive.component';
import { ResetpasswordComponent } from './retrive/resetpassword/resetpassword.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { WorkformComponent } from './workform/workform.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CandProfileComponent } from './cand-profile/cand-profile.component';
import { HrProfileComponent } from './hr-profile/hr-profile.component';
import { LoginGuard } from './login/login.guard';
import { JobspageComponent } from './jobspage/jobspage.component';
import { HrFormComponent } from './hr-form/hr-form.component';
import { ApplicationsComponent } from './applications/applications.component';
import { MyfavjobComponent } from './myfavjob/myfavjob.component';
import { FormReviewComponent } from './form/form-review/form-review.component';
import { FormCreateComponent } from './form/form-create/form-create.component';
import { PostJobComponent } from './post-job/post-job.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", component: HomeComponent },
  { path: "workform", component: WorkformComponent },
  { path: "form", component: FormComponent },
  { path: "retrive", component: RetriveComponent },
  { path: "valid/:token", component: ResetpasswordComponent },
  { path: "cand-profile", component: CandProfileComponent},
  { path: "hr-profile", component: HrProfileComponent},
  { path: "jobspage", component: JobspageComponent },
  { path: "cand-form", component: CandidateFormComponent },
  { path: "hr-form", component: HrFormComponent },
  { path: "applications", component: ApplicationsComponent},
  { path: "myfavjob", component: MyfavjobComponent},
  { path: "form-create", component: FormCreateComponent },
  { path: "form-review", component: FormReviewComponent },
  { path: "post_job", component: PostJobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

