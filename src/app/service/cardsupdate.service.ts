import { Injectable,OnInit } from '@angular/core';
import { NotecrudService } from '../service/notecrud.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsupdateService implements OnInit{

  private allNotes=new BehaviorSubject([]);
  currentnotes=this.allNotes.asObservable();
  private archive='false';
  private trash='false';

  constructor(private notecrud:NotecrudService) {
    
    this.notecrud.getNotes(this.archive,this.trash).subscribe(
      response =>
      {
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
   
  changemessage(archive:string,trash:string)
  {
    this.archive=archive;
    this.trash=trash;
    this.notecrud.getNotes(archive,trash).subscribe(
      response=>{
        console.log(response);
        this.allNotes.next(response);
      },
      error =>{  
       console.log(error);
      }
    )          
  }

  changemessage2()
  {
    this.notecrud.getNotes(this.archive,this.trash).subscribe(
      response=>
      {
        console.log(response);
        this.allNotes.next(response);
      },
      error =>{  
       console.log(error);
      }
    )          

  }


}
