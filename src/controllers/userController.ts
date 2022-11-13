import {Request, Response} from 'express'
import { User } from '../protocols/User.js';
import {userRepository} from '../repositories/userRepository.js'
import connection from "../database/db.js";


async function createUser (req: Request, res: Response) {
const {name, email, password} = req.body as User

try {

    await userRepository.insertNewUserData(name, email, password)
    res.sendStatus(200)

} catch (error) {
    res.send(error.message)
}


}

function signIn (req: Request, res: Response) {
    const {email, password} = req.body as User
}


export {
    createUser,
    signIn
}