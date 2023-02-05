import { Router, Request, Response } from 'express'
import { body, param, validationResult } from 'express-validator'
import Product from '../models/product'

const router = Router()

router.get('/products', async (_req: Request, res: Response) => {
  try {
    const data = await Product.find({})

    return res.status(200).json({ data })
  } catch (err) {
    console.error(err)
    return res.sendStatus(500)
  }
})

router.post(
  '/products',
  [body('productName').not().isEmpty(), body('price').not().isEmpty()],
  async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const product = {
      productName: req.body.productName,
      price: req.body.price,
      stock: req.body.stock
    }

    try {
      const data = await Product.create(product)
      const id = data.id
      res.append('Location', 'http://localhost:8000/products' + id)
      return res.status(201).json({ meta: { id }, data })
    } catch (err) {
      return res.sendStatus(500)
    }
  }
)

router.put(
  '/products/:id',
  [param('id').isMongoId()],
  async (req: Request, res: Response) => {
    const id = req.params.id

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const count = await Product.count({
        _id: id
      })
      const updatedProduct = {
        _id: id,
        ...req.body
      }
      console.log(updatedProduct)

      if (count) {
        const data = await Product.findByIdAndUpdate(id, updatedProduct, {
          new: true
        })
        return res.status(200).json({
          meta: { id },
          data
        })
      }
    } catch (err) {
      console.error(err)
      return res.sendStatus(400)
    }
  }
)

router.delete('/products/:id', async (req, res) => {
  const id = req.params.id
  const count = await Product.count({ _id: id })
  if (count) {
    try {
      await Product.findByIdAndRemove(id)
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
