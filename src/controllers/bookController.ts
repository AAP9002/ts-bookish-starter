import { Router, Request, Response } from 'express';
import { Book } from '../models/booksModel';
import { Copy } from '../models/copiesModel';
import { AuthorOfBook } from '../models/authorsOfBooksModel';

class BookController {
    router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/all', this.getBooks.bind(this));
        this.router.get('/:id', this.getBook.bind(this));
        this.router.post('/', this.createBook.bind(this));
    }

    async getBooks(req: Request, res: Response) {
        const books = await Book.findAll(); 
        return res.status(200).json({
            books: books
        })
    }

    async getBook(req: Request, res: Response) {
        try{
            const currentBook = await Book.findByPk(req.params.id);
            if(!currentBook){
                return res.status(400).json({
                    error: 'invalid request',
                error_description: 'Book record could not be found.',
                })
            }
            
            return res.status(200).json({
                book: currentBook
            });
        }
        catch(e){
            return res.status(500).json({
                error: 'server_error',
                error_description: `${e}`,
            });
        }
    }

    async createBook(req: Request, res: Response) {
        const { title, isbn, numberOfCopies, authors} : {title:string, isbn:string, numberOfCopies:number, authors:string[]} = req.body;

        try{
            const newBook = Book.build({
                title: title,
                isbn: isbn,
            })
    
            await newBook.save()
            const newBookId = newBook.dataValues.id;

            await Promise.all(authors.map(async (author) => {
                    const authorBookRelationRecord = AuthorOfBook.build({
                        authorId:author,
                        bookId:newBookId,
                    })
                    await authorBookRelationRecord.save()
                })
            )

            for(let i = 0; i < numberOfCopies; i++){
                const newBookCopy = Copy.build({
                    bookId: newBookId,
                })
        
                await newBookCopy.save()
            }
            return res.status(201).json({
                status:`Book Created and ${numberOfCopies} made`
            });
        }
        catch(e){
            console.error(e)
            return res.status(500).json({
                status:"Book Not Created"
            });
        }
    }
}

export default new BookController().router;
