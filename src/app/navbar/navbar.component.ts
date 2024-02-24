import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isInformatikus:any
isAdmin:any
isUser:any
constructor(private auth:AuthService){
  this.auth.getInformatikus().subscribe(
    (res)=>this.isInformatikus=res
  )
  this.auth.getsAdmin().subscribe(
    (res)=>this.isAdmin=res
  )
  this.auth.getLoggedUser().subscribe(
    (res)=> this.isUser=res
  )
}

logout(){
  this.auth.logout()
}
}
