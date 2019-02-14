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

@Injectable({
  providedIn: 'root'
})

export class NotecrudService {

  constructor(private http:HttpClient) { }

  private noteUrl='http://localhost:8082/api/notes';
  private labelUrl='http://localhost:8082/api/label';
  private collabUrl='http://localhost:8082/api/collab';

  public createNote(newNote:CreateNoteModel):any
  {
    return this.http.post<CreateNoteModel>(this.noteUrl,newNote,httpOptions);
  }

  public getNotes(archive,trash):Observable<CreateNoteModel[]>
  {
    return this.http.get<CreateNoteModel[]>(this.noteUrl+'?archive='+archive+'&trash='+trash,httpOptions2);
  }

  public deleteNote(newNote:CreateNoteModel):any{
    
    return this.http.delete(this.noteUrl+'?id='+newNote.id,httpOptions);
  }

  public updateNote(updateNode:CreateNoteModel):any{
      
   console.log(updateNode);
    return this.http.put(this.noteUrl,updateNode,httpOptions);
  }

  public createLabel(newLabel:Label){

    return this.http.post(this.labelUrl,newLabel,httpOptions);
  }

  public getAllLabels():Observable<Label[]>
  {
    return this.http.get<Label[]>(this.labelUrl,httpOptions2);
  }

  public updateLabel(updateLabel:Label):any{
    console.log(updateLabel);
    return this.http.put(this.labelUrl,updateLabel,httpOptions);
  }

  public addLabelToNote(noteid:Number,labelid:Number):any{
    
    return this.http.post(this.labelUrl+'/addnotetolabel?noteid='+noteid+'&labelid='+labelid,httpOptions2);
  }

  public deletenotetolabel(noteid:Number,labelid:Number):any{
    return this.http.delete(this.labelUrl+'/deletenotetolabel?noteid='+noteid+'&labelid='+labelid,httpOptions2);
  }

  public deleteLabel(labelId:Number):any{
    return this.http.delete(this.labelUrl+'?labelId='+labelId,httpOptions2);
  }

  public searchNotes(searchWords:string,isArchive:boolean,isTrash:boolean):Observable<CreateNoteModel[]>{
    console.log(searchWords);
    return this.http.get<CreateNoteModel[]>(this.noteUrl+'/search/'+searchWords+'?isArchive='+isArchive+'&isTrash='+isTrash,httpOptions2)
  }

  public addCollaboratorNote(sharedUserId:Number,sharedNoteId:Number):any
  {
    return this.http.post(this.collabUrl+"?sharedUserId="+sharedUserId+"&sharedNoteId="+sharedNoteId,httpOptions2);
  }

}