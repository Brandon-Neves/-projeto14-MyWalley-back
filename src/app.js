import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import authRouter from './routes/AuthRouter.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use(authRouter)
//app.use(transactionRouter)

app.listen(process.env.PORT, () => {
  console.log('Servidor funcionando')
})
