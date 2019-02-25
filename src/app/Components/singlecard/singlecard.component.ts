import { Component, OnInit, Input } from '@angular/core';
import { CreateNoteModel } from '../../Models/createnote.model';
import { NotecrudService } from '../../service/notecrud.service';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { CardsupdateService } from '../../service/cardsupdate.service';
import { Label } from '../../Models/label.model';
import { CollaboratordialogComponent } from '../collaboratordialog/collaboratordialog.component';
import { ReceiveNote } from '../../Models/receivingnote.model';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})
export class SinglecardComponent implements OnInit {

  private colors: string[][] = [['white', 'FireBrick', 'orange', 'LightSkyBlue'], ['Lavender', 'HoneyDew', 'blue', 'CadetBlue'], ['gray',
    "Peru", "pink", "brown"]];
  private imageget: boolean = true;
  private labelsall: Label[];
  public dateTime=new FormControl();
  constructor(private cardupdate: CardsupdateService, private notecrudservice: NotecrudService, private snackBar: MatSnackBar, private dialog: MatDialog) {
   
  }

  @Input() notedetails: ReceiveNote;


  ngOnInit() {

    this.notecrudservice.getAllLabels().subscribe(
      response => {
        this.labelsall = response;
        this.imageget = false;
      }
    )
    if (this.notedetails.note.image == null) {

    }
  }


  noteDelete() {
    console.log('notedeletecall');
    this.notecrudservice.deleteNote(this.notedetails.note).subscribe(
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

  dostuff() {
    const dialogRef = this.dialog.open(EditdialogComponent, {
      width: '500px',
      data: { notedetails: this.notedetails.note }
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.notedetails.note = result;
      this.notecrudservice.updateNote(this.notedetails.note).subscribe(
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
      )
    });
  }

  addPerson() {
    const dialogRef2 = this.dialog.open(CollaboratordialogComponent, {
      width: '600px',
      height: '250px',
      data: { notedetails: this.notedetails }
    });

    dialogRef2.afterClosed().subscribe(result => {

    }
    );

  }

  colorchange(singlecolor: string) {
    this.notedetails.note.color = singlecolor;
    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
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

  archivenote() {
    this.notedetails.note.archive = !this.notedetails.note.archive;
    this.notedetails.note.trash = false;
    if (this.notedetails.note.archive) {
      this.notedetails.note.pinned = false;
    }
    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
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

  trashnote() {
    this.notedetails.note.trash = true;
    this.notedetails.note.archive = false;
    this.notedetails.note.pinned = false;
    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
      response => {
        if (response.statusCode == 166) {
          this.snackBar.open(response.statusMessage, "", {
            duration: 2000,

          })
          this.cardupdate.changemessage2();
        }
      },
      error => {
        console.log("Error", error);
      }
    );

  }

  restore() {
    this.notedetails.note.trash = false;
    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
      response => {
        if (response.statusCode == 166) {
          this.snackBar.open(response.statusMessage, "", {
            duration: 2000,

          })
          this.cardupdate.changemessage2();
        }
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  lncheck(x, y) {
    console.log(x);
    console.log(y);
  }

  haveThisLabel(label: Label, note: CreateNoteModel) {
    console.log(label.labelName + "  " + note.id);
    this.notecrudservice.addLabelToNote(label.id, note.id).subscribe(
      response => {

        console.log(response);
        this.cardupdate.changemessage2();
      }
    );
  }

  removeThisLabel(label: Label, note: CreateNoteModel) {
    console.log('ss');
    this.notecrudservice.deletenotetolabel(label.id, note.id).subscribe(
      response => {
        this.cardupdate.changemessage2();
      })
  }

  unpinned() {
    this.notedetails.note.pinned = !this.notedetails.note.pinned;
    if (this.notedetails.note.pinned) {
      this.notedetails.note.archive = false;
    }

    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
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

  addCardPhoto(file) {
    console.log(file);
    console.log("print");
    this.notecrudservice.noteImageAdd(String(this.notedetails.note.id), file).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  SetRemainder(event)
  {
    console.log(event.value);
    let date=new Date(event.value);
    this.notedetails.note.remainder=date;
    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
      response =>
      {
        console.log(response);
      }
    )

  }
  methods()
  {
    console.log('sdf');
  }
}
