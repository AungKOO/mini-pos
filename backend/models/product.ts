import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    stock: Number,
})

export default mongoose.model('Product', productSchema)