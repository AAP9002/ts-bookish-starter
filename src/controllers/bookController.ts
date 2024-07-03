import { Router, Request, Response } from 'express';
import { Request as db_request } from 'tedious';
import { dbConnection } from '../config/db';
class BookController {
    router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/all', this.getBooks.bind(this));
        this.router.get('/:id', this.getBook.bind(this));

        this.router.post('/', this.createBook.bind(this));
    }

    getBooks(req: Request, res: Response) {
        // TODO: implement functionality

        const db_req = new db_request("SELECT * FROM books", function (err, rowCount, rows) {
            console.log(rowCount)
        });

        let result = []
        db_req.on('row', function (columns) {
            var row = {};
            columns.forEach(function (column) {
                row[column.metadata.colName] = column.value;
            });
            result.push(row);
        });

        db_req.on('requestCompleted', function () {
            return res.status(200).json({
                books: result
            });
        });

        db_req.on('error', function (err) {
            return res.status(500).json({
                error: `database error`,
                error_description: `${err}`,
            });
        });
        dbConnection.execSql(db_req)
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
