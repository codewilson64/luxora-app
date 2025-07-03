import express from 'express'
import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config()

const stripe = Stripe(process.env.STRIPE_KEY)

const router = express.Router()

router.post('/create-checkout-session', async (req, res) => {
  const products = req.body

  const session = await stripe.checkout.sessions.create({
    line_items: products.map(product => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
          },
          unit_amount: product.price * 100, // assuming price in dollars, convert to cents
        },
        quantity: product.cartQuantity || 1,
      })),
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.send({url: session.url});
});

export default router