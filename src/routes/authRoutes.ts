import { Router } from 'express';
import { register } from '../controllers/authController';



const router = Router()


router.post('/register', register)
router.post('/login', )
router.post('/refresh-token', )
router.post('/logout', )


export {
    router as authRouter
}