import { z } from "zod"

export const  SignupValidation= z.object({
    name: z.string().min(3,{ message: 'No name cant be less than 2 characters'}),
    username: z.string().min(2,{ message: 'Thats too short to be a username'}),
    email: z.string().email(),
    password: z.string().min(8,{ message: 'Password must be atleast 8 characters'}),
  })
  export const  SigninValidation= z.object({
    email: z.string().email(),
    password: z.string().min(8,{ message: 'Password must be atleast 8 characters'}),
  })