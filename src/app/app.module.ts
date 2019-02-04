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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NotebarComponent } from './Components/notebar/notebar.component';
import {NotesComponent} from './Components/notes/notes.component';
import { SinglecardComponent } from './Components/singlecard/singlecard.component';
import { EditdialogComponent } from './Components/editdialog/editdialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NotecrudService } from './service/notecrud.service';
import { LabelsComponent } from './Components/labels/labels.component';
import { EditlabeldialogComponent } from './Components/editlabeldialog/editlabeldialog.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';

const  routes:Routes = [
  {path : '' , redirectTo : '/login',pathMatch:'full' },
  {path : 'login' ,component:LoginComponent},
  {path : 'verify/:token' ,component:VerifyComponent},
  {path : 'register' ,component:RegisterComponent},
  {path :'forgot',component:ForgotComponent},
  {path :'resetpassword/:token',component:ResetComponent},
  {path : 'resetpage/:token',component:ResetpageComponent},
  {path : 'home',component:HomeComponent,
  children:[
    {path:'',redirectTo:'notes',pathMatch:'full'},
    {path:'archive',component:ArchiveComponent},
    {path:'notes',component:NotesComponent},
    {path:'labels/:labelvalue',component:LabelsComponent , runGuardsAndResolvers: 'paramsChange',},
    
    // {path:'Remainders',component:remainders},
    // {path:'EditLabels',component:editLabels},
    // {path:'Overview',component:archive},
    // {path:'Trash',component:trash}
  ]
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
    NotesComponent,
    NotebarComponent,
    SinglecardComponent,
    EditdialogComponent,
    LabelsComponent,
    EditlabeldialogComponent,
    ArchiveComponent,
    TrashComponent
  ],

  entryComponents: [SinglecardComponent, EditdialogComponent,EditlabeldialogComponent],

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
    MatTooltipModule,
    MatDialogModule
    
  ],
  providers: [UserserviceService,NotecrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }