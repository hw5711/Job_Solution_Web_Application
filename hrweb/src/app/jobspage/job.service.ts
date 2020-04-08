import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, throwError } from "rxjs";
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class JobService {

private job_id: string;
private job_title: string;

constructor(private http: HttpClient, private router: Router) { }

getJobId(){
    return this.job_id;
}

setJobId(id) {
    this.job_id = id;
}

getJobTitle(){
    return this.job_title;
}

setJobTitle(title){
    this.job_title = title;
}

}


