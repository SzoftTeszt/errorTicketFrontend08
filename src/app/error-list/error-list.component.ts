import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.css']
})
export class ErrorListComponent {
  hibaLista:any
  oszlopok=["date", "email", "errorMessage"]

  statuszok=[
    {value:0, text:"Felvéve"},
    {value:1, text:"Folyamatban"},
    {value:2, text:"Megoldva"},
  ]


  constructor(private base:BaseService){
    this.base.getErrors().snapshotChanges().pipe(
      map(
        ch=>ch.map(c=>({key:c.payload.key, ...c.payload.val()}))
      ))
      .subscribe(
        (res)=>this.hibaLista=res
      )
  }
  saveError(hiba:any){
    console.log("HIba", hiba)
    this.base.saveError(hiba)
  }
}
