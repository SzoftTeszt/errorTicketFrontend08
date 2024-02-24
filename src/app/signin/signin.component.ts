import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
// userName:any
password:any
email:any
// user:any
// sAdmin:any
constructor(private auth:AuthService){
  // this.auth.getLoggedUser().subscribe(
  //   (res)=>this.user=res
  // )
  
  // this.auth.getsAdmin().subscribe(
  //   (res)=>this.sAdmin=res
  // )
}

claims(){
  // this.auth.setClaims().subscribe(
  //   {
  //     next:(res)=>console.log("Sikeres jog beállítás",res),
  //     error:(res)=>console.log("Sikertelen jog beállítás",res),
  //   }
  // )
}

login(){
  this.auth.signIn(this.email, this.password)
}
// register(){
//   this.auth.signUp(this.email, this.password)
// }
googleLogin(){
  this.auth.googleAuth()
}

}
