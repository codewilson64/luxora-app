import { useSelector } from 'react-redux'
import { useState } from 'react'
import spinner from '../assets/loading.png'

const CheckoutBox = ({ products }) => {
  const subTotal = useSelector(state => state.cart.cartTotalAmount)
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: "POST",
        body: JSON.stringify(products),
        headers: {'Content-Type': 'application/json'}
    })
      const data = await response.json()

      if(data.url) {
        window.location.href = data.url
      }
    } 
    catch (error) {
      console.log('checkout failed', error.message)
    }
    finally {
      setLoading(false)
    }
  }
   
  return (
    <div className='h-fit w-full md:w-[35%] bg-zinc-300/40 rounded-lg px-5 py-5 mt-5 md:mt-0'>
          <div className='w-full text-center border-b border-gray-300 pb-5'>
            <h1 className="text-xl text-center font-bold text-black uppercase">order summary</h1>
          </div>

          <div className='flex flex-col gap-4 font-normal text-black py-5 border-b border-gray-300'>
            <div className='flex items-center justify-between'>
              <div className='text-sm'>
                <p>Subtotal</p>
              </div>

              <div className='text-lg'>
                <p>${subTotal.toFixed(2)}</p>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='text-sm'>
                <p>Delivery</p>
              </div>

              <div className='text-lg'>
                <p>Free</p>
              </div>
            </div>           
          </div>

          <div className='text-lg text-black py-5 border-b border-gray-300'>
            <div className='flex items-center justify-between font-bold mb-4'>
              <div>
                <p>Estimated Total:</p>
              </div>

              <div>
                <p>${subTotal.toFixed(2)}</p>
              </div>
            </div>

            <div 
              onClick={handleCheckout}
              className='flex items-center justify-center bg-green-500 py-2 text-center rounded-lg'
            >
              <button className='uppercase text-sm text-white flex items-center justify-center h-5'>
                {loading ? (
                  <img src={spinner} alt="loading" className='animate-spin h-5 w-5'/>
                ) : (
                  'proceed to checkout'
                )}
              </button>              
            </div>
          </div>

        </div>
  )
}

export default CheckoutBox