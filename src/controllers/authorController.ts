import { Router, Request, Response } from 'express';
import { Author } from "../models/authorsModel";

class AuthorController {
    router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/all', this.getAuthors.bind(this));
        this.router.get('/:id', this.getAuthor.bind(this));
        this.router.post('/', this.createAuthor.bind(this));
    }

    async getAuthors(req: Request, res: Response) {
        const authors = await Author.findAll(); 
        return res.status(200).json({
            authors: authors
        })
    }
    
    async getAuthor(req: Request, res: Response) {
        try{
            const currentAuthor = await Author.findByPk(req.params.id);
            if(!currentAuthor){
                return res.status(400).json({
                    error: 'invalid request',
                error_description: 'Author record could not be found.',
                })
            }
            
            return res.status(200).json({
                author: currentAuthor
            });
        }
        catch(e){
            return res.status(500).json({
                error: 'server_error',
                error_description: `${e}`,
            });
        }
    }

    async createAuthor(req: Request, res: Response) {
        const { name } : {name:string} = req.body;

        try{
            const newAuthor = Author.build({
                name:name
            });
            await newAuthor.save()
            return res.status(200).json({
                newAuthor: newAuthor
            })
        }
        catch{
            return res.status(500).json({
                status:"Author Not Created"
            });
        }
    }

}

export default new AuthorController().router;
