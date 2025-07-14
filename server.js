import express from "express"
import cors from "cors"
import 'dotenv/config'
import { clerkWebhooks } from "./controllers/webhooks"

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res) => res.send('api working'))
app.post('/webhooks', clerkWebhooks)

const PORT = process.env.PORT || 5000

app.listen(PORT,() =>{
    console.log(`server is running on port${PORT}`);
    
})