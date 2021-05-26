import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DetallesAlumnoComponent } from './detalles-alumno/detalles-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    LoginComponent,
    DetallesAlumnoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
