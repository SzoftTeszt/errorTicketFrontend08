import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HibabejelentesComponent } from './hibabejelentes/hibabejelentes.component';
import { ErrorReportComponent } from './error-report/error-report.component';
import { UserListComponent } from './user-list/user-list.component';
import { ErrorListComponent } from './error-list/error-list.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:"", component:HibabejelentesComponent},
  {path:"signin", component:SigninComponent},
  {path:"userlist", component:UserListComponent},
  {path:"errorlist", component:ErrorListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
