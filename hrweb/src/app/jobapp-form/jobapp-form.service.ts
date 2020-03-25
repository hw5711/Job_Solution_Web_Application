import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Jobapp } from './jobapp-form.model';

@Injectable({providedIn: 'root'})
export class JobappFormService {
  private jobapps: Jobapp[] = [];
  private jobappsUpdated = new Subject<Jobapp[]>();

  getJobapps() {
    return [...this.jobapps];
  }

  getJobappUpdateListener() {
    return this.jobappsUpdated.asObservable();
  }

  addJobapp(
    firstName: String,
    lastName: String,
    telephone: String,
    email: String,
    address: String,
    address2: String,
    city: String,
    state: String,
    zipcode: String,
    jobtitle: String,
    company: String,
    location: String,
    fromdate: Date,
    todate: Date,
    roledescription: string,
    schoolname: string,
    educationlevel: string,
    startdate: Date,
    enddate: Date,
    major: string,
    cumulativegpa: string,
    skills: string,
    accomplishments: string,
    sponsership: string,
    acknowledgment: string,
    gender: string,
    hispanic: string,
    veteran: string,
    disability: string) {
    const jobapp: Jobapp = { 
        firstName: firstName,
        lastName: lastName,
        telephone: telephone,
        email: email,
        address: address,
        address2: address2,
        city: city,
        state: state,
        zipcode: zipcode,
        jobtitle: jobtitle,
        company: company,
        location: location,
        fromdate: fromdate,
        todate: todate,
        roledescription: roledescription,
        schoolname: schoolname,
        educationlevel: educationlevel,
        startdate: startdate,
        enddate: enddate,
        major: major,
        cumulativegpa: cumulativegpa,
        skills: skills,
        accomplishments: accomplishments,
        sponsership: sponsership,
        acknowledgment: acknowledgment,
        gender: gender,
        hispanic: hispanic,
        veteran: veteran,
        disability: disability }; 
    console.log("test: ", jobapp);
    this.jobapps.push(jobapp);
    this.jobappsUpdated.next([...this.jobapps]);
  }
}
