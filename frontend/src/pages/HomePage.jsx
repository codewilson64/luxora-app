import HomeBg from '../assets/homeBgImg.webp'
import Category from '../components/Category'
import Footer from '../components/Footer'
// import MostWantedBags from '../components/MostWantedBags'
import NoirBag from '../components/NoirBag'
import Spotlight from '../components/Spotlight'

const HomePage = () => {
  return (
    <div className='max-w-[1700px] mx-auto'>
      <div className='relative'>
        <img src={HomeBg} alt="img" className='w-full h-[100vh] object-cover'/>
        <p className='absolute left-6 bottom-16 md:left-auto md:bottom-auto md:right-32 md:top-1/2 md:-translate-y-1/2 font-extrabold text-2xl md:text-4xl text-white'>
          CHIC SUMMER STYLE
        </p>
      </div>

      <Category />
      <NoirBag />
      <Spotlight />
      {/* <MostWantedBags /> */}
      <Footer />
    </div>
  )
}

export default HomePage