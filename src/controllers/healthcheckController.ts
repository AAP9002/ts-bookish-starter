import { Router, Request, Response } from 'express';
import { startAndCountTables } from '../config/tableStatus';
class HealthCheckController {
    router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/', this.check.bind(this));
    }

    check = async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).json({ status: 'OK' });
    };

    checkDB = async (req: Request, res: Response): Promise<Response> => {
        try{
            await startAndCountTables();
            return res.status(200).json({ status: 'OK' });
        }
        catch{
            return res.status(500).json({ status: 'Database Error' });
        }
    };
}

export default new HealthCheckController().router;
