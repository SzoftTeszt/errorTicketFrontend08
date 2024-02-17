import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { BaseService } from '../base.service';
import { EmailService } from '../email.service';

interface Alert {
	type: string;
	message: string;
}
@Component({
  selector: 'app-hibabejelentes',
  templateUrl: './hibabejelentes.component.html',
  styleUrls: ['./hibabejelentes.component.css']
})
export class HibabejelentesComponent {
  alert: Alert = 
    {
      type: 'success',
      message: 'This is an success alert',
    }

  user:any
  email:any
  errorMessage:any
  sendOk=false
  message=""

  @ViewChild('ngbalert') ngbalert:any

  constructor(private emailService:EmailService, private auth:AuthService, private base: BaseService) {
    this.auth.getLoggedUser().subscribe(
      (user)=>{
        this.user=user
        console.log("user:", user)
      }
    )
    this.email= window.localStorage.getItem("email")
    if (this.email){
    this.auth.signInEmailLink(this.email).then(
      (res)=>{
        // console.log("OK:(siwe)", res)
        window.localStorage.removeItem("email")
      }
    )
    .catch(
      (res)=>console.log("Nok:", res)
    )
    }
  }

  sendInEmailLink(){
    this.email=String(this.email)+"@gmail.com"
    window.localStorage.setItem("email", this.email)
    console.log("email",this.email)
    this.auth.sendInEmailLink(this.email)
    // this.auth.signInEmailLink("jagerattila@gmail.com")
    // .then(      (res)=>console.log("Belépés",res)
    
  }

  logout(){
    this.auth.logout()
  }
  sendError(){
    
    //errorMessage
    //this.logout()
    var body={
      email:this.user.email,
      date: new Date(),
      errorMessage: this.errorMessage,
      status:"Felvéve"
    }
    this.email=""
    console.log("Body:", body)
    this.base.pushError(body).then(
      (res)=>{
        this.emailService.sendMail(this.user.email,this.errorMessage)
        this.sendOk=true
        this.message="A hibajegyet rögzítettük, feldolgozása folyamatban van!"
        setTimeout(() => {          
            this.sendOk=false
            this.logout()          
        }, 2000);
      }
    ).catch(
      (res)=>{
        this.sendOk=true
        this.message="A hibát nem sikerült rögzítenünk, próbálja meg később."
        this.logout()          
        
      }

    )
  }

  close(alert:any){}

  proba(){
    this.ngbalert.Close()
  }

  sendEmail(){
    // this.emailService.sendMail()
  }
}
