import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

//middleware
app.use(express.json())
app.use(cors())

// routes
import stripeRoute from './routes/stripe.js'

app.use('/api/stripe', stripeRoute)

// server
app.listen('4000', () => {
  console.log("Server running on port 4000")
})

