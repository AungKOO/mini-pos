import User from '../models/user'
import Router from 'express'
import { createHash } from 'node:crypto'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const secret = process.env.SECRET || 'good try harder'
const router = Router()

router.post('/login', async (req: any, res: any) => {
  console.log(secret)

  const { username, password } = req.body
  const hashPassword = createHash('sha256').update(password).digest('hex')
  const user = await User.find({ username, password: hashPassword })
  if (!(user.length === 0)) {
    let auth = { username: user[0]['username'], password: user[0]['password'] }
    jwt.sign(auth, secret, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        console.error(err.message)
        return res.sendStatus(500)
      } else {
        return res.status(200).json({ token })
      }
    })
  } else {
    return res.sendStatus(401)
  }
})

export default router
