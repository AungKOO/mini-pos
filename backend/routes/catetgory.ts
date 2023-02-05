import Category from '../models/category'
import { Router, Request, Response } from 'express'
import { param, validationResult } from 'express-validator'
const router = Router()

router.get('/categories', async (_req: Request, res: Response) => {
  try {
    const data = await Category.find({})
    return res.status(200).json({ data })
  } catch (err) {
    console.error(err)
    return res.sendStatus(500)
  }
})

router.post('/categories', async (req: Request, res: Response) => {
  const category = {
    categoryName: req.body.productName
  }

  await Category.create(category, (err, data) => {
    if (err) {
      return res.sendStatus(500)
    }
    const id = data.id
    res.append('Location', 'http://localhost:8000/categories' + id)
    return res.status(201).json({ meta: { id }, data })
  })
})

router.put(
  '/categories/:id',
  [param('id').isMongoId()],
  async (req: Request, res: Response) => {
    const id = req.params.id

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    try {
      const count = await Category.count({
        _id: id
      })
      const updatedCategory = {
        _id: id,
        ...req.body
      }
      console.log(updatedCategory)
      if (count) {
        const data = await Category.findByIdAndUpdate(id, updatedCategory)

        return res.status(200).json({
          meta: { id },
          data
        })
      } else {
        return res.sendStatus(500)
      }
    } catch (err) {
      return res.sendStatus(400)
    }
  }
)

router.delete('/categories/:id', async (req, res) => {
  const id = req.params.id
  const count = await Category.count({ _id: id })

  if (count) {
    try {
      await Category.findByIdAndRemove(id)
      return res.sendStatus(204)
    } catch (err) {
      console.error(err)
      return res.sendStatus(500)
    }
  } else {
    return res.sendStatus(404)
  }
})

export default router
