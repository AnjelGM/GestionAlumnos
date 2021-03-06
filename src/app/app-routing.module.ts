import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import{AlumnoComponent} from './alumno/alumno.component';
import{LoginComponent} from './login/login.component';
import { DetallesAlumnoComponent } from './detalles-alumno/detalles-alumno.component';

const routes:Routes=[
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'alumno', component:AlumnoComponent},
  {path:'login', component:LoginComponent},
  {path:'detail/:nombre', component:DetallesAlumnoComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
