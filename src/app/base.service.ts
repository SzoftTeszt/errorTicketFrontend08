import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
 refHibajegyek: AngularFireList<any>
  constructor(private db: AngularFireDatabase) {
    this.refHibajegyek=db.list("hibak")
   }

   getErrors(){
    return this.refHibajegyek
   }
   pushError(body:any){
    return this.refHibajegyek.push(body)
   }
   saveError(body:any){
    return this.refHibajegyek.update(body.key,body)
   }
   deleteError(body:any){
      return this.refHibajegyek.remove(body.key)
   }
}
