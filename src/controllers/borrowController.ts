import { Router, Request, Response } from 'express';
import { Borrow } from '../models/borrowsModel';

class BorrowController {
    router: Router;

    constructor() {
        this.router = Router();
        // this.router.get('/all', this.getAuthors.bind(this));
        // this.router.get('/:id', this.getAuthor.bind(this));
        this.router.post('/', this.createBorrow.bind(this));
    }

    async createBorrow(req: Request, res: Response) {
        const { copyId, userId, dueAt, borrowAt } : {copyId:string, userId:string, dueAt:number, borrowAt:number} = req.body;

        try{
            const newBorrow = Borrow.build({
                copyId,
                userId,
                dueAt,
                borrowAt
            });
            await newBorrow.save()
            return res.status(200).json({
                borrow: newBorrow
            })
        }
        catch{
            return res.status(500).json({
                status:"Failed to create borrow"
            });
        }
    }

}

export default new BorrowController().router;
