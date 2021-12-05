import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './mycompo/signup/signup.component';
import { LoginComponent } from './mycompo/login/login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './mycompo/home/home.component';
import { ProfileComponent } from './mycompo/profile/profile.component';
import { AccountsComponent } from './mycompo/accounts/accounts.component';
import { NavigationBarComponent } from './mycompo/navigation-bar/navigation-bar.component';
import { DashboardComponent } from './mycompo/dashboard/dashboard.component';
import { WelcomComponent } from './mycompo/welcom/welcom.component';
import { HttpClientModule } from '@angular/common/http';
import { UserdataService } from './userdata.service';
import { LeftnevbarComponent } from './mycompo/leftnevbar/leftnevbar.component';
import { AccountFormComponent } from './mycompo/account-form/account-form.component';
import { EditReportComponent } from './mycompo/edit-report/edit-report.component';
import { ReportEditFormComponent } from './mycompo/report-edit-form/report-edit-form.component';


export const appRoutes:Routes=[
  {path:"",component:WelcomComponent},
  {path:"welcome",component:WelcomComponent},
  {path:"editreport",component:EditReportComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"navigationbar",component:NavigationBarComponent},
  {path:"profile",component:ProfileComponent},
  {path:"home",component:HomeComponent},
  {path:"account",component:AccountsComponent},
  {path:"dashboard/:id",component:DashboardComponent},
  {path:"**",component:WelcomComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    AccountsComponent,
    NavigationBarComponent,
    DashboardComponent,
    WelcomComponent,
    LeftnevbarComponent,
    AccountFormComponent,
    EditReportComponent,
    ReportEditFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,

  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
