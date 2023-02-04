import {Router, Request, Response} from 'express'
import { body, param, validationResult } from 'express-validator'
import Product from '../models/product'
    

const router = Router()

router.get('/products', (_req: Request, res: Response) => {
    try {
      Product.find({}, (err, data: object) => {
        if (err) {
          console.error(err)
          res.sendStatus(500)
        } else {
          res.status(200).json({data})
        }
      })
    }
    catch(err) {
      res.sendStatus(500)
    }
  })
  
  router.post('/products', [
    body('productName').not().isEmpty(),
    body('price').not().isEmpty()
  ],async (req: Request, res: Response) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }
    const product = {
      productName: req.body.productName,
      price: req.body.price,
      stock: req.body.stock,
    }
  
      await Product.create(product, (err, data) => {
        if (err) {
          return res.sendStatus(500)
        }
        const id = data.id
        res.append('Location', 'http://localhost:8000/products' + id)
        return res.status(201).json({meta: {id}, data})
      })
  })
  
  router.put('/products/:id', [
    param('id').isMongoId()
  ], (req: Request, res: Response) => {
    const id = req.params.id
  
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }
    Product.count({
      _id: id
    }, (err, count) => {
      if (err) {
        console.error(err)
        return res.sendStatus(400)
      }
      const updatedProduct = {
        _id: id,
        ...req.body
      }
      console.log(updatedProduct)
      if (count) {
        Product.findByIdAndUpdate(id, updatedProduct, (err, data) => {
          if (err) {
            console.error(err)
            return res.sendStatus(500)
          } else {
            return res.status(200).json({
                meta: {id},
                data
            })
          }
        })
      } 
    })
  })
  
  router.delete('/products/:id', (req, res) => {
    const id = req.params.id
    Product.count({_id: id}, (err, count) => {
      if (err) {
        console.error(err)
        return res.sendStatus(404)
      }
      if(count) {
        Product.findByIdAndRemove(id, (err) => {
          if (err) {
            console.error(err)
            return res.sendStatus(500)
          } else {
            return res.sendStatus(204)
          }
        } )
      } else {
        return res.sendStatus(404)
      }
    })
  })

  export default router