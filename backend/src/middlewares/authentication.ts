import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { keySEED } from '../config/keys';

class Authentication {

    async checkToken(req: Request, res: Response, next: NextFunction) {
        const token = req.query.token;
        try {
            await verify(token, keySEED);
        } catch (error) {
            res.status(401).json({ status: false,  message: 'Token invalido' });
        }
        next();
    }

}

export const authentication = new Authentication();