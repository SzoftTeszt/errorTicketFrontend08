import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HibabejelentesComponent } from './hibabejelentes/hibabejelentes.component';
import { ErrorReportComponent } from './error-report/error-report.component';

const routes: Routes = [
  {path:"", component:HibabejelentesComponent},
  {path:"errorreport", component:ErrorReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
