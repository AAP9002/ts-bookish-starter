import { Router, Request, Response } from 'express';
import { User } from '../models/usersModel';

class UserController {
    router: Router;

    constructor() {
        this.router = Router();
        // this.router.get('/all', this.getAuthors.bind(this));
        // this.router.get('/:id', this.getAuthor.bind(this));
        this.router.post('/', this.createUser.bind(this));
    }

    async createUser(req: Request, res: Response) {
        const { username, password} : {username:string, password:string} = req.body;

        try{
            const newUser = User.build({
                username,
                password,
            });
            await newUser.save()
            return res.status(200).json({
                status:"User Created Successfully"
            })
        }
        catch{
            return res.status(500).json({
                status:"Failed to create user"
            });
        }
    }
}

export default new UserController().router;
