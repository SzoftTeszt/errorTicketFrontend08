import { Component } from '@angular/core';

@Component({
  selector: 'app-error-report',
  templateUrl: './error-report.component.html',
  styleUrls: ['./error-report.component.css']
})
export class ErrorReportComponent {
  email:any
  constructor(){
    this.email=window.localStorage.getItem("email")
  }
}
