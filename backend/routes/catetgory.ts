import Category from '../models/category'
import {Router, Request, Response} from 'express'
import {param, validationResult} from 'express-validator'
const router = Router()


router.get('/categories', (_req: Request, res: Response) => {
    try {
      Category.find({}, (err, data: object) => {
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
  
  router.post('/categories',async (req: Request, res: Response) => {
    const category = {
      categoryName: req.body.productName,
    }
  
      await Category.create(category, (err, data) => {
        if (err) {
          return res.sendStatus(500)
        }
        const id = data.id
        res.append('Location', 'http://localhost:8000/categories' + id)
        return res.status(201).json({meta: {id}, data})
      })
  })
  
  router.put('/categories/:id', [
    param('id').isMongoId()
  ], (req: Request, res: Response) => {
    const id = req.params.id
  
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }
    Category.count({
      _id: id
    }, (err, count) => {
      if (err) {
        console.error(err)
        return res.sendStatus(400)
      }
      const updatedCategory = {
        _id: id,
        ...req.body
      }
      console.log(updatedCategory)
      if (count) {
        Category.findByIdAndUpdate(id, updatedCategory, (err, data) => {
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
  
  router.delete('/categories/:id', (req, res) => {
    const id = req.params.id
    Category.count({_id: id}, (err, count) => {
      if (err) {
        console.error(err)
        return res.sendStatus(404)
      }
      if(count) {
        Category.findByIdAndRemove(id, (err) => {
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