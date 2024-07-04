import { Router, Request, Response } from 'express';
import { Book } from '../models/booksModel';
import { Author } from '../models/authorsModel';

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
        // TODO: implement functionality
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
        const { title, isbn } = req.body;

        console.log(title, isbn)

        const newBook = Book.build({
            title: title,
            isbn: isbn,
        })

        try{
            await newBook.save()
            return res.status(201).json({
                status:"Book Created"
            });
        }
        catch(e){
            console.error(e)
            return res.status(500).json({
                status:"Book Not Created"
            });
        }
        // TODO: implement functionality
    }
}

export default new BookController().router;
