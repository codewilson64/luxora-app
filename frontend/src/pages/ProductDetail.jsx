import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch('https://codewilson64.github.io/luxora-products-api/products.json')
        const data = await response.json()
        const productDetail = data.find(p => p.id === Number(id))
        setProduct(productDetail)
      } catch (error) {
        console.log('Fetch product detail failed', error)
      }
    }

    fetchProductDetail()
  }, [id])

  return (
    <div className='max-w-[1000px] mx-auto'>
      <div className='w-full block md:flex items-center justify-between pt-0 pb-16 md:py-16'>
        <div className='w-full md:w-[45%] mb-3'>
          <img 
            src={product.image} 
            alt="product"
            className='w-full h-[600px] object-cover' 
          />
        </div>

        <div className='w-full md:w-[45%] px-5'>
          <p className='text-sm md:text-lg font-bold text-black'>{product.name}</p>
          <p className='text-sm md:text-lg font-bold text-black mb-5'>${product.price}</p> 

          <div className='py-7 text-black border-t border-b border-gray-300/50'>
            <p>Colour: <span className='font-bold'>{product.colour}</span></p>
          </div>

          <div className='py-7 text-black border-b border-gray-300/50'> 
            <p>Size: <span className='font-bold'>{product.size}</span></p>
          </div>
          <div className='w-full text-center md:text-left fixed md:static bottom-0 left-0 pt-4 pb-7 bg-white'>
            <Button product={product}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail