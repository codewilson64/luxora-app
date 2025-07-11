import { useDispatch } from 'react-redux'
import { addToCart, getTotals } from '../cartSlice'

const Button = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    if(product) {
      dispatch(addToCart(product))
      dispatch(getTotals())
    }
  }

  return (
    <button 
      onClick={handleAddToCart}
      className="w-11/12 py-2 bg-[#2c2c2c] hover:bg-[#000] rounded-lg text-white uppercase text-lg font-normal">
        Add to Bag
    </button>
  )
}

export default Button