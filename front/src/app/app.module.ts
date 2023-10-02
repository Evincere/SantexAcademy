import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompartidaModule } from './components/compartida/compartida.module';

//componentes
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LogoutConfirmationComponent } from 'src/app/components/dashboard/navbar/logout-confirmation/logout-confirmation.component';
//import { InicioComponent } from './component/dasboard/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    //InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CompartidaModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
