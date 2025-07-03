import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import CheckoutSuccessPage from './pages/CheckoutSuccessPage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className='font-montserrat'>
      <div className='max-w-[1700px] w-full mx-auto'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/wishlist' element={<WishlistPage />}/>
        <Route path='/:category' element={<Products />}/>
        <Route path='/product/:id' element={<ProductDetail />}/>
        <Route path='/checkout-success' element={<CheckoutSuccessPage />}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App