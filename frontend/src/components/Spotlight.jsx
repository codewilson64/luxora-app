import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'

const Spotlight = () => {
  const [spotlight, setSpotlight] = useState([])
  const scrollRef = useRef(null)

  const scrollLeft = () => scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
  const scrollRight = () => scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' })

  useEffect(() => {
    const fetchSpotlight = async () => {
      try {
        const response = await fetch('https://codewilson64.github.io/luxora-products-api/spotlight.json')
        const data = await response.json()
        setSpotlight(data)
      } catch (error) {
        console.log('Failed fetching spotlight', error)
      }
    }

    fetchSpotlight()
  }, [])

  return (
    <div className='w-full py-5'>
      <div className="flex items-center justify-between px-8 py-3">
        <div>
          <p className="text-2xl text-black font-bold">In The Spotlight</p>
        </div>   
        <div className="flex items-center gap-3">
          <ChevronLeft className="size-6 cursor-pointer" onClick={scrollLeft}/>
          <ChevronRight className="size-6 cursor-pointer" onClick={scrollRight}/>
        </div>
      </div>

      <div 
        className='w-full flex items-center gap-1 overflow-x-auto scroll-smooth scrollbar-hide'
        ref={scrollRef}
      >
          {spotlight.map((item) => (
            <Link 
              to={`/${item.category}`}
              key={item.id} 
              className='w-[380px] h-[600px] min-w-[200px] flex-shrink-0 cursor-pointer'
            >
              <img 
                src={item.image} 
                alt="item image" 
                className='w-full object-cover mb-2'
              />            
              <p className='w-full text-center uppercase text-lg text-black font-normal'>
                {item.name}
              </p>           
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Spotlight