import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RetriveComponent } from './retrive/retrive.component';
import { ResetpasswordComponent } from './retrive/resetpassword/resetpassword.component';
import { HomeComponent } from './home/home.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CandProfileComponent } from './cand-profile/cand-profile.component';
import { HrProfileComponent } from './hr-profile/hr-profile.component';
import { JobspageComponent } from './jobspage/jobspage.component';
import { HrFormComponent } from './hr-form/hr-form.component';
import { ApplicationsComponent } from './applications/applications.component';
import { MyfavjobComponent } from './myfavjob/myfavjob.component';
import { JobappFormComponent } from './jobapp-form/jobapp-form.component';
import { JobappFormCreateComponent } from './jobapp-form/jobapp-form-create/jobapp-form-create.component';
import { JobappFormReviewComponent } from './jobapp-form/jobapp-form-review/jobapp-form-review.component';
import { PostJobComponent } from './post-job/post-job.component';
import { ViewPostingComponent } from './view-posting/view-posting.component';
import { ViewApplicantsComponent } from './view-applicants/view-applicants.component';
import { CompanyComponent } from './company/company.component';
import { EmployersComponent } from './employers/employers.component';


import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", component: HomeComponent },
  { path: "retrive", component: RetriveComponent },
  { path: "valid/:token", component: ResetpasswordComponent },
  { path: "cand-profile", component: CandProfileComponent, canActivate: [LoginGuard] },
  { path: "hr-profile", component: HrProfileComponent, canActivate: [LoginGuard] },
  { path: "jobspage", component: JobspageComponent, canActivate: [LoginGuard]  },
  { path: "cand-form", component: CandidateFormComponent, canActivate: [LoginGuard]  },
  { path: "hr-form", component: HrFormComponent, canActivate: [LoginGuard]  },
  { path: "applications", component: ApplicationsComponent, canActivate: [LoginGuard] },
  { path: "myfavjob", component: MyfavjobComponent, canActivate: [LoginGuard] },
  { path: "post_job", component: PostJobComponent, canActivate: [LoginGuard]  },
  { path: "jobappform", component: JobappFormComponent, canActivate: [LoginGuard]  },
  { path: "jobappform-create", component: JobappFormCreateComponent, canActivate: [LoginGuard] },
  { path: "jobappform-review", component: JobappFormReviewComponent, canActivate: [LoginGuard] },
  { path: "post-job", component: PostJobComponent, canActivate: [LoginGuard]  },
  { path: "view-posting", component: ViewPostingComponent, canActivate: [LoginGuard]  },
  { path: "view-applicants", component: ViewApplicantsComponent, canActivate: [LoginGuard]  },
  { path: "company-info", component: CompanyComponent },
  { path: "employer-info", component: EmployersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }

