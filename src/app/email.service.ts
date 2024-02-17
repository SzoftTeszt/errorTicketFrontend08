import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendMail(){
    let templateParams:any={
      "cc-address":"jagerattila@gmail.com",
      "content": "Hibaleírás"
    }
    emailjs.send("service_0lgcigd","template_hntxyv7",templateParams,"ONK21jFWWoMuoXxqo")
    .then(
      (res)=>console.log("email elküldve",res)
      ).catch(
        (res)=>console.log("email Hiba", res)

      )
  }
}
