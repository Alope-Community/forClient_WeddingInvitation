import React from 'react'
import Header from '../Components/Header'
import Countdown from '../Components/Coutdown'

const RSVP = () => {
  return (
    <>
      <Header
        mainTitle="WEEDING PARTY DETAILS"
        subtitle="FROM THE VOWS TO THE CELEBRATION — HERE’S WHERE IT ALL HAPPENS"
      />
      <div className="min-h-screen font-serif text-center">
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

        <div className="w-[90%] max-w-md mx-auto h-48 bg-gray-300 rounded-lg mb-4" />

        <button className="bg-[#8A5529] text-white px-4 py-2 rounded-md text-sm mb-6">Google Maps</button>

        <h2 className="text-xl font-bold border-t border-b py-2 tracking-wider">SAVE THE DATE</h2>

        <Countdown />
      </div>
    </>
  )
}

export default RSVP