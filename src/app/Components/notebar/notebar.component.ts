import { Component, OnInit } from '@angular/core';
import { NotecrudService } from '../../service/notecrud.service'
import { CreateNoteModel } from '../../Models/createnote.model';
import { MatSnackBar } from '@angular/material';
import { CardsupdateService } from '../../service/cardsupdate.service';

@Component({
  selector: 'app-notebar',
  templateUrl: './notebar.component.html',
  styleUrls: ['./notebar.component.css']
})
export class NotebarComponent implements OnInit {

  barshow: boolean = false;
  createnote: CreateNoteModel = new CreateNoteModel;
  //loginmodel:LoginModel=new LoginModel();
  constructor(private cardupdate: CardsupdateService, private notecrudservice: NotecrudService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  fullCardShow() {
    this.barshow = !this.barshow;
  }

  noteSave() {
    this.barshow = !this.barshow;
    this.createnote.pinned = true;
    if (this.createnote.content !== null && this.createnote.title !== null) {
      this.notecrudservice.createNote(this.createnote).subscribe(
        response => {
          if (response.statusCode == 166) {
            this.snackBar.open(response.statusMessage, "", {
              duration: 2000,
            })
          }
          this.cardupdate.changemessage2();
        },
        error => {
          console.log("Error", error);
        }
      );
    }
    this.createnote.archive = false;
    this.createnote.title = null;
    this.createnote.content = null;
    this.createnote.color = "";
    this.createnote.image = "";
    this.createnote.pinned = false;
    this.createnote.trash = false;
    this.createnote.remainder = "";
  }

}
