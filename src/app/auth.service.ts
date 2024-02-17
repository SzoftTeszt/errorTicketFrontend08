import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="https://us-central1-hibajegykezelo-abbcf.cloudfunctions.net/api"
  
  private isLogged = new BehaviorSubject<any>(null)

 actionCodeSettings = {

    // url: 'http://localhost:4200/',
    // url: 'http://localhost:4200/errorreport',
    url: 'https://hibajegykezelo-abbcf.web.app',
    handleCodeInApp:true
  }

  constructor(private afAuth:AngularFireAuth) { 
    this.afAuth.authState.subscribe(
      (user)=>{
        this.isLogged.next(user)
      }
    )
  }

  getLoggedUser(){
    return this.isLogged
  }

  sendInEmailLink(email:any){
    console.log("Email cím:",email)
    this.afAuth.sendSignInLinkToEmail(email, this.actionCodeSettings)
    .then(
      (res)=>console.log("email elküldve")
    )
    .catch(
      (hiba)=>console.log("email hiba")
    )
  }
  signInEmailLink(email:any){
    return this.afAuth.signInWithEmailLink(email)
   
  }
  logout(){
    this.afAuth.signOut()
  }
}
