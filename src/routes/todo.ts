import Express from 'express';
import Path from 'path';

const router = Express.Router();

router.get('/todos',(req:Express.Request, res:Express.Response, next: Express.NextFunction) => {
    res.send("hi these are todos")
})

export default router;