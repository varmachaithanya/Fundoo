export interface Notes{
    noteID:number,
    title:string,
    description:string,
    color:string,
    reminder:string,
    isArchive:boolean,
    isPinned:boolean,
    isTrash:boolean,
    createdAt:Date,
    modifiedAt:Date,
    userId:number
}