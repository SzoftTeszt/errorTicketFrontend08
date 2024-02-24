import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users:any
  constructor(private auth:AuthService){
    this.auth.getUsers().subscribe(
      (res)=>{
        this.users=res

      }
    )
    
  }
  changeClaims(user:any, claim:any){
    user.claims[claim]= !user.claims[claim];
    this.auth.setClaims(user.uid,user.claims).subscribe(
      (res)=> this.auth.getUsers().subscribe(
        (res)=>{this.users=res}
    )
    )
  }
  
}
