import { Component, OnInit, ViewChild } from '@angular/core';
import {NotecrudService} from '../../service/notecrud.service';
import { CreateNoteModel } from '../../Models/createnote.model';
import { EditlabeldialogComponent } from '../editlabeldialog/editlabeldialog.component';
import {MatDialog} from '@angular/material';
import { Label } from '../../Models/label.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit  {

  private clickedEvent:boolean;
//  private  allnotesdata:CreateNoteModel[];

  label:Label=new Label();
  labelsall:Label[];
  ngOnInit() {
    this.notecrudservice.getAllLabels().subscribe(
        response=>
        {
          this.labelsall=response;
          console.log(this.labelsall.length);
        }
    )
  }

  constructor(private notecrudservice:NotecrudService,private dialog: MatDialog){

  }

  childEventClicked(open:boolean)
  {
    this.clickedEvent=open;
    
  }

  EditLabelDialog()
  {
    const dialogRef = this.dialog.open(EditlabeldialogComponent, {
      width: '300px',
      height:'400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      //  console.log('The dialog was closed');
        //console.log(result);
        if(result!=null)
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

  ss(l:string)
  {
    
  }
  
}
