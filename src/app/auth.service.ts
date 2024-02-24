import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="https://us-central1-hibajegykezelo-abbcf.cloudfunctions.net/api"
  user:any
  private isLogged = new BehaviorSubject<any>(null)
  private isSAdmin = new BehaviorSubject<any>(null)
  private isInformatikus = new BehaviorSubject<any>(null)

 actionCodeSettings = {

    url: 'http://localhost:4200/',
    // url: 'http://localhost:4200/errorreport',
    // url: 'https://hibajegykezelo-abbcf.web.app',
    handleCodeInApp:true
  }

  constructor(private afAuth:AngularFireAuth, private http: HttpClient) { 
    this.afAuth.authState.subscribe(
      (user)=>{
        this.user=user
        if (user){
          console.log("Belépve", user)
          user.getIdToken().then(
            (token:any)=>{


              this.user.token=token
              console.log("token", token)
              console.log("token", this.user.token)
              this.isLogged.next(this.user)
              this.getClaims(this.user.uid).subscribe(
                (res:any)=>{
                  this.user.claims=res
                  this.isLogged.next(this.user)
                  if (res){
                    if (res.informatikus) this.isInformatikus.next(true)
                    else this.isInformatikus.next(false)
                    if (res.sAdmin) this.isSAdmin.next(true)
                    else this.isSAdmin.next(false)  
                                      
                  }
                }
              )
            }
          )
        }
        
      }
    )
  }

  getClaims(uid:string){
    let headers = new HttpHeaders(
      {'Authorization': this.user.token}
    )
    console.log(this.url+this.user.uid+'/claims');
    return this.http.get(this.url+this.user.uid+'/claims',{headers})
  }

  setClaims(uid?:string){
    let headers = new HttpHeaders().set(
      'Authorization', this.user.token
    )
    uid=this.user.uid
    let body={
      uid:uid,
      claims:{informatikus:true, sAdmin:true}
    }

    console.log("headers:"+headers);
    console.log("body:"+body);
    console.log("url:",this.url+'setCustomClaims');
    return this.http.post(this.url+'setCustomClaims',body,{headers:headers})
  }

  googleAuth(){
    this.afAuth.signInWithPopup(new GoogleAuthProvider())
  }

  signUp(email:any, password:any){
    return this.afAuth.createUserWithEmailAndPassword(email,password)
  }
  signIn(email:any, password:any){
    return this.afAuth.signInWithEmailAndPassword(email,password)
  }
  getLoggedUser(){
    return this.isLogged
  }
  getInformatikus(){
    return this.isInformatikus
  }
  getsAdmin(){
    return this.isSAdmin
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
    this.afAuth.signOut().then(
      ()=>{
        console.log("Kilépve")
        this.isLogged.next(null)
        this.isInformatikus.next(false)
        this.isSAdmin.next(false)
      }).catch(()=>console.log("Nem lépett ki!"))
    
  }
}
