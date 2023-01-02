import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginUserComponent,
    RegisterUserComponent
  ],
  imports: [
      CommonModule,
      SharedModule
    ],
    exports : [
      BrowserModule ,
      RouterModule
     
    ]
})
export class UserModule { }
