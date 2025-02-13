import { Router } from 'express';
import {  loginController, registerController } from '../controllers/authController';
import { loginRateLimiter } from '../middlewares/globalRateLimiter';



const router = Router()


router.post('/register', registerController)
router.post('/login', loginRateLimiter ,loginController )
router.post('/refresh-token', )
router.post('/logout', )


export {
    router as authRouter
}