import { MostWantedBags } from "../constants"
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { useRef, useState } from "react";
import HoverButton from "./HoverButton";

const Bags = () => {
  const scrollRef = useRef(null)
  const [currentIndexes, setCurrentIndexes] = useState(Array(MostWantedBags.length).fill(0));

  const scrollToStart = () => scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
  const scrollToEnd = () => scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' })

  const handleNext = (i) => {
    setCurrentIndexes(prev => {
      const newIndexes = [...prev];
      newIndexes[i] = (newIndexes[i] + 1) % MostWantedBags[i].images.length;
      return newIndexes;
    });
  };

  const handlePrev = (i) => {
    setCurrentIndexes(prev => {
      const newIndexes = [...prev];
      newIndexes[i] = (newIndexes[i] - 1 + MostWantedBags[i].images.length) % MostWantedBags[i].images.length;
      return newIndexes;
    });
  };

  return (
    <div className='w-full py-5'>
      <div className="flex items-center justify-between px-8 py-3">
        <div>
          <p className="text-2xl text-black font-bold">Most Wanted: Bags</p>
        </div>   
        <div className="flex items-center gap-3">
          <ChevronLeft className="size-6 cursor-pointer" onClick={scrollToStart}/>
          <ChevronRight className="size-6 cursor-pointer" onClick={scrollToEnd}/>
        </div>
      </div>

      <div 
        className='w-full flex items-center gap-1 overflow-x-auto scroll-smooth scrollbar-hide'
        ref={scrollRef}
      >
          {MostWantedBags.map((item, index) => (
            <div 
              key={index} 
              className='group relative w-[380px] h-[670px] min-w-[200px] flex-shrink-0 cursor-pointer border border-white hover:border-black'
            >
              <div className="relative aspect-[3/4] mb-4">
                <img 
                  src={item.images[currentIndexes[index]]} 
                  alt="item image" 
                  className='w-full object-cover'
                />     
                <ChevronLeft 
                  onClick={() => handlePrev(index)} 
                  className="size-10 hidden group-hover:flex text-[#aeacac] absolute left-1 top-1/2 -translate-y-1/2 cursor-pointer" 
                />
                <ChevronRight
                  onClick={() => handleNext(index)} 
                  className="size-10 hidden group-hover:flex text-[#aeacac] absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer" 
                />
              </div>
                     
              <p className='w-full text-center text-sm text-black font-normal'>
                {item.title}
              </p>           

              <div className='absolute bottom-8 w-full flex justify-center items-center'>
                <HoverButton product={item}/>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Bags