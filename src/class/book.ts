export class Book {
    id:number;
    title?:string;
    isbn?:number;
    added_at?:number

    public constructor(id_in:number, title_in:string, isbn_in:number,added_at_in:number){
        this.id = id_in;
        this.title = title_in;
        this.isbn = isbn_in;
        this.added_at = added_at_in;
    }
}