import { NextFunction, Request, Response } from "express"
import { registerSchema } from "../validations/registerSchema"
import { RegisterInput } from "../types/authTypes"





export const register = (req: Request, res: Response, next: NextFunction) => {
    try {
        const validatedDate: RegisterInput = registerSchema.parse(req.body)
        // const user = await 
    } catch (err) {
        
    }
}