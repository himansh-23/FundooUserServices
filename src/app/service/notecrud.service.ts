import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import {CreateNoteModel} from '../../app/Models/createnote.model';
import { Observable } from 'rxjs';
import { Label } from '../Models/label.model';

const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
  'token':localStorage.getItem('jwtToken')}
  )};

  const httpOptions2 ={
    headers: new HttpHeaders({
      'token':localStorage.getItem('jwtToken')
    })
  };

  const httpParams=new HttpParams();
  

@Injectable({
  providedIn: 'root'
})

export class NotecrudService {

  constructor(private http:HttpClient) { }

  private noteUrl='http://localhost:8082/api/notes/';
  private labelUrl='http://localhost:8082/api/label/';

  public createNote(newNote:CreateNoteModel):any
  {
    return this.http.post<CreateNoteModel>(this.noteUrl+'createnote',newNote,httpOptions);
  }

  public getNotes():Observable<CreateNoteModel[]>
  {
    return this.http.get<CreateNoteModel[]>(this.noteUrl+'allnotes',httpOptions2);
  }

  public deleteNote(newNote:CreateNoteModel):any{
    return this.http.post(this.noteUrl+'deletenote',newNote,httpOptions);
  }

  public updateNote(updateNode:CreateNoteModel):any{
   // console.log(updateNode.color);
   console.log(updateNode);
    return this.http.put(this.noteUrl+'updatenote',updateNode,httpOptions);
  }

  public createLabel(newLabel:Label){

    return this.http.post(this.labelUrl,newLabel,httpOptions);
  }

  public getAllLabels():Observable<Label[]>
  {
    return this.http.get<Label[]>(this.labelUrl,httpOptions2);
  }

  public updateLabel(updateLabel:Label):any{
    return this.http.put(this.labelUrl,updateLabel,httpOptions);
  }

  public addLabelToNote(noteid: Number,labelid: Number):any{
    return this.http.post(this.labelUrl+'addnotetolabel',httpParams.set('noteid',noteid+'').set('labelid',labelid+''),httpOptions2);
  }
}

