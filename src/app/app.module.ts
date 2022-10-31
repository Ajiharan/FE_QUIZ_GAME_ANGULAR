import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [AppComponent, SigninComponent, SignupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
