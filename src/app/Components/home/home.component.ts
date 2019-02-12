import { Component, OnInit, ViewChild } from '@angular/core';
import {NotecrudService} from '../../service/notecrud.service';
import { EditlabeldialogComponent } from '../editlabeldialog/editlabeldialog.component';
import {MatDialog} from '@angular/material';
import { Label } from '../../Models/label.model';
import { CardsupdateService } from '../../service/cardsupdate.service';
import { Router } from '@angular/router';
import { ViewchangeService } from '../../service/viewchange.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit  {

  private clickedEvent;
//  private  allnotesdata:CreateNoteModel[];
private mySearch;
  private show:boolean;
  label:Label=new Label();
  labelsall:Label[];
  ngOnInit() {
    this.notecrudservice.getAllLabels().subscribe(
        response=>
        {
          this.labelsall=response;
          //console.log(this.labelsall.length);
        }
    );
      this.viewChange.currentView.subscribe(
        response =>{
       this.show=response;
        }
      );
        /*response =>
        {
          this.changeView=response;
        }
      );-*/

  }
  constructor(private notecrudservice:NotecrudService,private dialog: MatDialog,private cardUpdateService:CardsupdateService,private router:Router,private viewChange:ViewchangeService){

  }

  childEventClicked(open:boolean)
  {
    this.clickedEvent=open; 
  }

  EditLabelDialog()
  {
    const dialogRef = this.dialog.open(EditlabeldialogComponent, {
      width: '300px',
      height:'350px',
      data: {labelsall:this.labelsall}
    });

    dialogRef.afterClosed().subscribe(result => {
      
        this.cardUpdateService.changemessage2();
        this.notecrudservice.getAllLabels().subscribe(
          response =>
            {
              this.labelsall=response;
            }
        )
        if(result!=null && result!="")
        {
          this.label.labelName=result;
          this.notecrudservice.createLabel(this.label).subscribe(
              response =>
              {
               console.log(response);
              
              }
            )
        }
    });
  }

  signout()
  {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/login'])
  }

  changeView(){
    this.viewChange.onViewChange();
   console.log(this.show);
  }

  searchHandler(event:string)
  {
    console.log(event);
    if(event.length>=2)
    {
      this.cardUpdateService.searchNotes(event);
    }
    else{
      this.cardUpdateService.changemessage2();
    }

  }
}
