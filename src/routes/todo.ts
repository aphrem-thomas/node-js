import Express from 'express';
import Path from 'path';

const router = Express.Router();

router.get('/todos',(req:Express.Request, res:Express.Response, next: Express.NextFunction) => {
    res.send("hi these are todos")
})

router.post('/todo',(req:Express.Request, res:Express.Response, next:Express.NextFunction)=>{
    console.log("request is", req.body);
})

export default router;