import { Trash2 } from 'lucide-react';
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart, decreaseCartItem, getTotals } from '../cartSlice';
import CheckoutBox from '../components/CheckoutBox';

const CartPage = () => {
  const products = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    dispatch(getTotals())
  }
  
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
    dispatch(getTotals())
  }

  const handleDecreaseItem = (product) => {
    dispatch(decreaseCartItem(product))
    dispatch(getTotals())
  }

  return (
    <div className="max-w-[1200px] mt-20 mx-auto">
      <div className='w-full block md:flex md:gap-6 mb-5 px-4'>

        {/* Left side */}
        <div className="w-full md:w-[65%] flex flex-col items-center justify-center">
          <div className='w-full text-center mb-5'>
            <h1 className="text-2xl font-bold text-black uppercase">shopping bag</h1>
          </div>

          <div className="w-full flex flex-col justify-between gap-8">
            {products.map((product) => {                
              return (
                <div key={product.id} className="w-full flex items-start gap-5 border border-gray-300/60 px-3 py-5 rounded-lg">
                  <div className="w-[35%] md:w-[18%]"> 
                    <img 
                      src={product.image} 
                      alt="product image" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full flex justify-between">
                    <div className='flex flex-col text-sm md:text-lg text-black gap-5'>
                      <p className='font-bold'>{product.name}</p>
                      <p className='font-normal'>${product.price}</p>

                      <div className=''>
                        <p className='font-normal mb-2'>Qty:</p>
                        <div className='w-24 flex items-center justify-between text-lg px-3 py-2 border border-gray-400/60 rounded-xl'>
                          <button 
                            onClick={() => handleDecreaseItem(product)} 
                            className='cursor-pointer'>
                              -
                            </button>
                            <p>{product.cartQuantity}</p>
                          <button  
                            onClick={() => handleAddToCart(product)}
                            className='cursor-pointer'>
                              +
                          </button>
                        </div>
                      </div>                 
                    </div>

                    <div className='flex flex-col items-end justify-between'>
                      <Trash2 
                        onClick={() => handleRemoveFromCart(product.id)}
                        className='size-5 cursor-pointer'
                      />
                      <p className='font-bold text-sm md:text-lg text-black'>
                        Sub Total: ${(product.price * product.cartQuantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right side */}
        <CheckoutBox products={products}/>
      </div>
    </div>
  )
}

export default CartPage