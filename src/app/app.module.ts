import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule, } from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './Components/register/register.component';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ResetComponent } from './Components/reset/reset.component';
import {MatIconModule} from '@angular/material/icon';
import {  HttpClientModule } from "@angular/common/http";
import { UserserviceService } from './service/userservice.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { VerifyComponent } from './Components/verify/verify.component';
import { ResetpageComponent } from './Components/resetpage/resetpage.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeComponent } from './Components/home/home.component';
import { SideNavComponent } from './Components/home/side-nav/side-nav.component';
import { DashBoardComponent } from './Components/home/dash-board/dash-board.component';
import { ContentComponent } from './Components/home/content/content.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

const  routes:Routes = [
  {path : '' , redirectTo : '/login',pathMatch:'full' },
  {path : 'login' ,component:LoginComponent},
  {path : 'verify/:token' ,component:VerifyComponent},
  {path : 'register' ,component:RegisterComponent},
  {path :'forgot',component:ForgotComponent},
  {path :'resetpassword/:token',component:ResetComponent},
  {path : 'resetpage/:token',component:ResetpageComponent},
  {path : 'home',component:HomeComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ResetComponent,
    VerifyComponent,
    ResetpageComponent,
    HomeComponent,
    SideNavComponent,
    DashBoardComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,MatToolbarModule
    
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }