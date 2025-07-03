import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const bagQuantity = useSelector(state => state.cart.cartTotalQuantity)

  return (
    <div className='flex items-center justify-between px-8 py-2 top-0 left-0 fixed w-full bg-white shadow-md z-50'>
      <div>
        {/* <Search className='size-5 cursor-pointer'/> */}
      </div>
      <Link to={'/'}>
        <h3 className='text-3xl text-black font-normal'>LUXORA</h3>
      </Link>
      <div>

      <Link to="/cart" className="relative flex items-center">
        <ShoppingCart className="size-7" />
          <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
            {bagQuantity}
          </span>
      </Link>
      </div>
    </div>
  )
}

export default Navbar