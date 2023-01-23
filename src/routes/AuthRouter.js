import { Router } from 'express'
import { signUp } from '../controller/AuthController'

const authRouter = Router()

authRouter.post('/', signUp)
//authRouter.post('/cadastro', signIn)

export default authRouter
