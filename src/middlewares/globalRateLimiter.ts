import { NextFunction, Request, Response } from 'express';
import { loginLimiter, tokenBucketLimiter } from '../utils/rateLimiter';







export const globalRateLimiter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await tokenBucketLimiter.consume(req.ip)
        next();
    } catch {
        res.status(429).json({
            message: 'Too MAny requests, Try Again Later.',
        })
    }
}

export const loginRateLimiter = async(req: Request, res: Response, next: NextFunction) => {
    try {
        await loginLimiter.consume(req.ip)
        next()
       } catch  {
        res.status(429).json({
            message: 'Too many Login Attemots. Try again Later.'
        })
    }
}