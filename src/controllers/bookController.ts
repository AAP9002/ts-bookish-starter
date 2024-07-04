import { Router, Request, Response } from 'express';
import { Book } from '../models/booksModel';

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
            row: books
        })
    }

    getBook(req: Request, res: Response) {
        // TODO: implement functionality
        return res.status(500).json({
            error: 'server_error',
            error_description: 'Endpoint not implemented yet.',
        });
    }

    createBook(req: Request, res: Response) {
        // TODO: implement functionality
        return res.status(500).json({
            error: 'server_error',
            error_description: 'Endpoint not implemented yet.',
        });
    }
}

export default new BookController().router;
