import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HibabejelentesComponent } from './hibabejelentes/hibabejelentes.component';
import { ErrorReportComponent } from './error-report/error-report.component';
import { UserListComponent } from './user-list/user-list.component';
import { ErrorListComponent } from './error-list/error-list.component';
import { SigninComponent } from './signin/signin.component';
import { SigupComponent } from './sigup/sigup.component';
import { sadminGuard } from './sadmin.guard';
import { informatikusGuard } from './informatikus.guard';

const routes: Routes = [
  {path:"", component:HibabejelentesComponent},
  {path:"signin", component:SigninComponent},
  {path:"signup", component:SigupComponent},
  {path:"userlist", component:UserListComponent, canActivate:[sadminGuard]},
  {path:"errorlist", component:ErrorListComponent, canActivate:[informatikusGuard]},
  {path:"logout", component:ErrorListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
