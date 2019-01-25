export class CreateNoteModel{
    title:string; //cannot be null
    content:string; //cannot be null
    userid:number; //cannot be null
    pinned:boolean;
    color:string;
    archive:boolean;
    trash:boolean;
    createStamp:Date;
    image:string;
    lastModifiedStamp:string;
    remainder:string;
}