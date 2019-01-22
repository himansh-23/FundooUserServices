import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private clickedEvent:boolean;

  ngOnInit() {

  }
  constructor(){

  }

  childEventClicked(open:boolean)
  {
    this.clickedEvent=open;
    //console.log(open);
  }

}
