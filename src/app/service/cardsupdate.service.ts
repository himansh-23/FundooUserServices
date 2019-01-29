import { Injectable,OnInit } from '@angular/core';
import { NotecrudService } from '../service/notecrud.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsupdateService implements OnInit{

  private allNotes=new BehaviorSubject([]);
  currentnotes=this.allNotes.asObservable();

  constructor(private notecrud:NotecrudService) {
    
    this.notecrud.getNotes().subscribe(
      response =>{
        this.allNotes.next(response);
      },
      error=>
      {
        console.log(error);
      }
    );
  
   }

   ngOnInit():void {
    
   }
   
  changemessage()
  {
    this.notecrud.getNotes().subscribe(
      response=>{
  
        this.allNotes.next(response);
      },
      error =>{  
       console.log(error);
      }
    )          
  }
}
