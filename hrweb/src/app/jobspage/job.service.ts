import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, throwError } from "rxjs";
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class JobService {

private job_id: string;
private job_title: string;
private job_company: string;
private job_type: string;
private job_industryType: string;
private job_description: string;
private job_location: string;
private job_expirationDate: string;

constructor(private http: HttpClient, private router: Router) { }

getJobId(){
    return this.job_id;
}

setJobId(id) {
    this.job_id = id;
}

getJobExpirationDate(){
    return this.job_expirationDate;
}

setJobExpirationDate(expirationDate) {
    this.job_expirationDate = expirationDate;
}

getJobTitle(){
    return this.job_title;
}

setJobTitle(title){
    this.job_title = title;
}

getJobType(){
    return this.job_type;
}

setJobType(jobType){
    this.job_type = jobType;
}

getJobCompany(){
    return this.job_company;
}

setJobCompany(company){
    this.job_company = company;
}

getJobIndustryType(){
    return this.job_industryType;
}

setJobIndustryType(industryType){
    this.job_industryType = industryType;
}

getJobDescription(){
    return this.job_description;
}

setJobDescription(description){
    this.job_description = description;
}

getJobLocation(){
    return this.job_location;
}

setJobLocation(location){
    this.job_location = location;
}

}


