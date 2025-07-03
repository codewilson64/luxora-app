import { Link } from 'react-router-dom'

const CheckoutSuccessPage = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center gap-12 text-5xl font-bold text-black'>
      <h1>Purchase Success!</h1>

      <div>
        <p className='text-lg text-black font-normal mb-2'>Thank you for shopping on Luxora. Come back again!</p>

        <Link to='/'>
          <p className='text-lg font-normal text-center text-gray-500 hover:text-gray-400'>Continue</p>
        </Link>
      </div>     
    </div>
  )
}

export default CheckoutSuccessPage