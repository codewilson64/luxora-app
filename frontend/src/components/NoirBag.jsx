import { useEffect, useState } from 'react';
import model1 from '../assets/noir_bag/model1.webp'
import noirBlackBag from '../assets/noir_bag/noirblackbag.webp'
import noirLightBag from '../assets/noir_bag/noirlightbag.webp'
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NoirBag = () => {
  const images = [noirBlackBag, noirLightBag]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [bag, setBag] = useState([])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  useEffect(() => {
    const fetchBag = async () => {
      const response = await fetch('https://codewilson64.github.io/luxora-products-api/products.json')
      const data = await response.json()
      const bag = data.find(item => item.name === "Beryl Tote Bag - Black")
      setBag(bag)
    }

    fetchBag()
  }, [])

  return (
    <Link to={`/product/${bag.id}`} className='w-full block md:flex items-center cursor-pointer'>
      <div className='w-full md:w-1/2'>
        <img 
          src={model1} 
          alt="model1 img" 
          className='w-full h-[900px] object-cover'
        />
      </div>

      <div className='flex justify-center w-full md:w-1/2 bg-[#ececec] relative overflow-hidden'>
        <img 
          src={bag.image} 
          alt="black bag" 
          className='w-3/4 h-[900px] object-cover transition duration-500'
        />
        <div className='w-full text-center absolute top-12 left-1/2 -translate-x-1/2'>
          <p className='text-black text-xl font-bold mb-1'>Big Bag, Little Surprise</p>
          <p className='text-black text-lg text-center font-normal underline'>SHOP NOW</p>
        </div>
        {/* <ChevronLeft 
          onClick={handlePrev}
          className='size-10 absolute left-10 top-1/2 -translate-y-1/2 text-[#c1c1c1] hover:text-[#a3a3a3] cursor-pointer'/>
        <ChevronRight 
          onClick={handleNext}
          className='size-10 absolute right-10 top-1/2 -translate-y-1/2 text-[#c1c1c1] hover:text-[#a3a3a3] cursor-pointer'/> */}
      </div>
    </Link>
  )
}

export default NoirBag