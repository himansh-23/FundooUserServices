import { Component, OnInit, } from '@angular/core';
import { CardsupdateService } from '../../service/cardsupdate.service';
import { ViewchangeService } from '../../service/viewchange.service';
import { ReceiveNote } from '../../Models/receivingnote.model';
import { interval } from 'rxjs';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {

  private allnotes: ReceiveNote[];
  private currentView: boolean;
  showtoolbar = false;
  showPinned = false;
  showUnpinned = false;
  constructor(private cardupdate: CardsupdateService, private viewChange: ViewchangeService) {
    this.cardupdate.changemessage('false', 'false');
    this.cardupdate.currentnotes2.subscribe(udnotes => {
      console.log(udnotes);
      this.allnotes = udnotes;
      this.showPinned = false;
      this.showUnpinned = false;
      this.content_filter();
    });
  }

  ngOnInit() {

    this.cardupdate.currentnotes2.subscribe(udnotes => {
      this.allnotes = udnotes;
      this.showPinned = false;
      this.showUnpinned = false;
      this.content_filter();
    });

    this.viewChange.currentView.subscribe(view => {
      this.currentView = view;
    }
    );

    //var remainderChecker=interval(1000);
    // remainderChecker.subscribe(
    //     time =>
    //     {
            // this.allnotes.forEach(
            //   singlenote =>
            //   {
            //  //   var y=new Date(singlenote.note.remainder);
            //     var x=new Date();
        //  //       console.log(x+"                     ");
        //       }
        //     )
    //    }
      
    //)
    // remainderChecker.subscribe(
    //   check =>
    //   {
    //     var x=new Date()
    //   }
    // )
    
    // var x=new Date('2019-03-01T09:36:50');
    

    // var y=new Date();
    
    // console.log(y);
    

  }

  private content_filter() {
    this.allnotes.forEach(x => {
      if (x.note.pinned == true) {
        this.showPinned = true;
      }

      if (x.note.pinned == false) {
        this.showUnpinned = true;
      }
    })
  }


}
