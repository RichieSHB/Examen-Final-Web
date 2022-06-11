import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InegiService } from './services/inegi.service';
import { NasaService } from './services/nasa.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NasaService,InegiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
