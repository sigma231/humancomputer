import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService}  from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { PropertiesComponent } from './properties/properties.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'properties', component: PropertiesComponent},
  {path: 'singlepage/:id', component: SinglepageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    SinglepageComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(
      appRoutes 
    ),
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthService, UserService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
