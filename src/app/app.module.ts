import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NotesComponent } from './notes/notes.component';
import { NotebarComponent } from './notebar/notebar.component';

const  routes:Routes = [
  {path : '' , redirectTo : '/login',pathMatch:'full' },
  {path : 'login' ,component:LoginComponent},
  {path : 'verify/:token' ,component:VerifyComponent},
  {path : 'register' ,component:RegisterComponent},
  {path :'forgot',component:ForgotComponent},
  {path :'resetpassword/:token',component:ResetComponent},
  {path : 'resetpage/:token',component:ResetpageComponent},
  {path : 'home',component:HomeComponent,
/*children:[
    {path:'',redirectTo:'overview',pathMatch:'full'},
    {path:'Notes',component:notes},
    {path:'Remainders',component:remainders},
    {path:'EditLabels',component:editLabels},
    {path:'Overview',component:archive},
    {path:'Trash',component:trash}]*/
}
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
    NotesComponent,
    NotebarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    NoopAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule
    
    
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }