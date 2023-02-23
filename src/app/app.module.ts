import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '../app/app.component';
import { routes } from '../app/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule here
    routes
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }