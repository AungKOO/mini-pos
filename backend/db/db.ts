import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pos'
const connectDB = async () => {
  console.log(uri)
  try {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      } as ConnectOptions)
      console.log("Database connected")
  }
  catch(err) {
    console.error(err)
    process.exit(1)
  }
}

export default connectDB