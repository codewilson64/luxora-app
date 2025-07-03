import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Category = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch('https://codewilson64.github.io/luxora-products-api/category.json')
        const data = await response.json()
        setCategory(data)
      } 
      catch (error) {
        console.log('Fetch category failed', error)  
      }
    }

    fetchCategory()
  }, [])

  return (
    <div className='py-5'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1'>
        {category.map((item) => (
          <Link
            to={`/${item.category}`}
            key={item.id} 
            className='relative w-full cursor-pointer'
          >
            <img 
              src={item.image} 
              alt="item image" 
              className='w-full h-full object-cover'
            />            
            <p className='w-full text-center absolute bottom-4 left-1/2 -translate-x-1/2 text-lg text-black font-normal'>
              {item.name}
            </p>           
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Category