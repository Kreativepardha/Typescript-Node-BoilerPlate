import bcrypt from 'bcrypt'
import { AuthTokens, LoginInput, RegisterInput } from '../types/authTypes'
import { User } from '../models/userModel';





export const registerService = async ({ email, password, role}: RegisterInput) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await User.create({
        email,
        password: hashedPassword,
        role
    })
}


export const loginService = async ({email, password}: LoginInput): Promise<AuthTokens> => {
    const user = await User.findOne({ email })
    if(!user) throw new Error('Invalid email or password')

        const isValid = await bcrypt.compare(password, user.password)
        if(!isValid) throw new Error('Invalid Email or Password')

            return {
                // accessToken: 
            }
}


export const refreshToken = async (token: string): Promise<{ accessToken: string}> => {
    // const decoded = ver
}