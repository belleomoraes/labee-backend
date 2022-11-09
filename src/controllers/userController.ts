import {Request, Response} from 'express'
import { User } from '../protocols/User.js';

function createUser (req: Request, res: Response) {
const {name, email, password} = req.body as User

}

function signIn (req: Request, res: Response) {
    const {email, password} = req.body as User
}

export {
    createUser,
    signIn
}