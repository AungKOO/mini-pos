import express from 'express'
import connectDB from './db/db'
import cors from 'cors'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

// routes
import productRoute from './routes/products'
import loginRoute from './routes/login'

dotenv.config()
const secret = process.env.SECRET || 'good try harder'

const app = express()
connectDB()
// body Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// CORS
app.use(cors())

function auth(req: any, res: any, next: Function) {
  const authHeader = req.headers['authorization']
  if (!authHeader) return res.sendStatus(401)
  const [type, token] = authHeader.split(' ')
  if (type !== 'Bearer') return res.sendStatus(401)
  jwt.verify(token, secret, function (err: any) {
    if (err) return res.sendStatus(401)
    else next()
  })
}
app.use('/api/v1', loginRoute)
app.use('/api/v1', auth, productRoute)

export default app
