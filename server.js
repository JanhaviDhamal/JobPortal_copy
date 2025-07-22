import express from "express"
import cors from "cors"
import 'dotenv/config'
import { clerkWebhooks } from "./controllers/webhooks.js"
import companyRoutes from "./routes/companyRoutes.js"
import connectCloudinary from "./config/cloudinary.js"
import connectDB from "./config/db.js"
const app = express()

await connectCloudinary()
await connectDB()

app.use(cors())
app.use(express.json())

app.get('/',(req,res) => res.send('api working'))
app.post('/webhooks', clerkWebhooks)
app.use('/api/company', companyRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT,() =>{
    console.log(`server is running on port${PORT}`);
    
})