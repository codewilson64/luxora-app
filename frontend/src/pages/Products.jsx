import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import HoverButton from '../components/HoverButton'

const Products = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProductCategory = async () => {
      try {
        const response = await fetch('https://codewilson64.github.io/luxora-products-api/products.json')
        const data = await response.json()
        const productsData = data.filter(p => p.category === category)
        console.log(data)
        setProducts(productsData)
      } 
      catch (error) {
        console.log('Fetch product category failed', error)
      } 
    }

    fetchProductCategory()
  }, [category])

  return (
    <div className='max-w-[1700px] mx-auto p-7 pt-20'>
      <h3 className='font-bold text-xl text-center uppercase text-black mb-5'>woman's {category}</h3>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1'>
        {products.map((item) => (
          <div 
            key={item.id} 
            className='group cursor-pointer border border-white hover:border-black'
          >   
            <Link 
              to={`/product/${item.id}`}
              className=''
            >
              <div className="aspect-[3/4] w-full overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt="product"
                  className="w-full h-full object-cover"
                  loading='lazy'
                />
              </div>
              <p className='text-sm text-black text-center font-normal mb-3'>{item.name}</p>
              <p className='text-sm text-black text-center font-normal'>${item.price}</p>           
            </Link>

            <div className='h-[80px] flex justify-center items-center'>
              <HoverButton product={item}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products