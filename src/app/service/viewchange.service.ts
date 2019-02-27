import { Injectable,OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewchangeService implements OnInit {


  private view=new BehaviorSubject(true);
  currentView=this.view.asObservable();
  private xyz:boolean;
  constructor() { }


  ngOnInit():void{

  }

  onViewChange():void{
    
    this.currentView.subscribe(
      response =>
      {
        this.xyz=response;
      }
    )
    this.view.next(!this.xyz);
  }
    
}
