import Header from '../Components/Header'
import Countdown from '../Components/Coutdown'
import Location from '../Components/Location'
import { useNavigate } from 'react-router-dom'

const Place = () => {
  const navigate = useNavigate();
  const handleMapsKlik = () => {
    window.location.href = 'https://www.google.com/maps/dir//2FQG%2BXHG,+Jl.+Dr.+Ir.+Soekarno,+Winduherang,+Kec.+Kuningan,+Kabupaten+Kuningan,+Jawa+Barat+45552,+Indonesia/@-6.960065,108.3940548,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e6f168999f5289b:0x82e5f55d2f541814!2m2!1d108.4764487!2d-6.9600701?entry=ttu&g_ep=EgoyMDI1MDQxMy4wIKXMDSoASAFQAw%3D%3D'
  }
  return (
    <>
      <Header
        mainTitle="WEEDING PARTY DETAILS"
        subtitle="FROM THE VOWS TO THE CELEBRATION — HERE’S WHERE IT ALL HAPPENS"
      />
      <div className="font-serif text-center">
        <h2 className="text-xl font-bold border-t border-b py-2 mb-4 tracking-wider">WEDDING TIMELINE</h2>

        <div className="flex items-center justify-center">
          <div className='text-left border-r pr-3'>
            <p className="text-[12px] font-semibold">WEDDING CEREMONY</p>
            <p className='text-sm'>Sunday, May 25th, 2025</p>
            <p className='text-sm'>at 09:00 AM - until finished</p>
          </div>
          <div className='text-[12px] text-right ml-3'>
            <p className="font-semibold">WEDDING PARTY</p>
            <p className='text-sm'>Sunday, May 25th, 2025</p>
            <p className='text-sm'>at 10:00 AM - until finished</p>
          </div>
        </div>

        <p className="font-semibold mt-4 mb-2">Kuningan Islamic Center</p>

        <div className="w-[90%] max-w-md mx-auto h-48 rounded-lg mb-4">
          <Location
            width='100%'
            height='100%'
          />
        </div>

        <button
          onClick={handleMapsKlik}
          className="bg-[#8A5529] text-white px-4 py-2 rounded-md text-sm mb-6"
        >Google Maps
        </button>

        <h2 className="text-xl font-bold border-t border-b py-2 tracking-wider">SAVE THE DATE</h2>

        <Countdown />
      </div>
    </>
  )
}

export default Place