import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {CreateNoteModel} from '../../app/Models/createnote.model';
import { Observable } from 'rxjs';

const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
  'token':localStorage.getItem('jwtToken')}
  )};

  const httpOptions2 ={
    headers: new HttpHeaders({
      'token':localStorage.getItem('jwtToken')
    })
  };

@Injectable({
  providedIn: 'root'
})

export class NotecrudService {

  constructor(private http:HttpClient) { }

  private noteUrl='http://localhost:8082/api/notes/';

  public createNote(newNote:CreateNoteModel):any
  {
   // console.log(localStorage.getItem('jwtToken'));
    return this.http.post<CreateNoteModel>(this.noteUrl+'createnote',newNote,httpOptions);
  }

  public getNotes():Observable<CreateNoteModel[]>
  {
  //  console.log(localStorage.getItem('jwtToken'));
    return this.http.get<CreateNoteModel[]>(this.noteUrl+'allnotes',httpOptions2);
  }
}

