import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

class UserController {

    async saveUser(req: Request, res: Response): Promise<void>  {
        const { name, email, password } = req.body;
        const newUser: User = new UserModel({
            name,
            email,
            password: bcrypt.hashSync(password, 10)
        });
        try {
            await newUser.save();
            res.status(200).json({status: true, name, email});
        } catch (error) {
            res.status(400).json({status: false, messsage: 'Error al guardar el usuario', error});
        }
    }

}

export const userController = new UserController();