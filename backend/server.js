import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

//middleware
app.use(express.json())

const corsOptions = {
  origin: 'https://luxorashop-pi.vercel.app',
  methods: ['POST'],
  credentials: true
};
app.use(cors(corsOptions))
app.options('*', cors(corsOptions))

// routes
import stripeRoute from './routes/stripe.js'

app.use('/api/stripe', stripeRoute)

export default app

