import express from 'express';
import { createUser, signIn } from "../controllers/userController.js";


const router = express.Router();

router.post('/signin', createUser)
router.post('/signup', signIn)

export default router;




