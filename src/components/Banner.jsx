import React from 'react'
import Button from './elements/Button'
import PBanner from '../assets/images/pizza_banner.png'

const Banner = () => {
  return (
    <div className='banner w-full md:w-2/3 px-7 mx-auto relative flex items-center justify-between'>
        <div className="banner-description w-full md:w-1/2 p-3">
<h2 className='mb-6 text-4xl font-bold text white'>
No lines, no waiting - just Orderly</h2>
<p className="font-semibold text-lg text-red-600 py-2">No lines, no waiting - just Orderly </p>
<p className="font-semibold text-lg text-red-600 py-2">Gone are the days of standing in long queues or navigating through complex menus. With Orderly, you can effortlessly explore a vast array of restaurants, cafes, and eateries, all within a few taps. Whether you're in the mood for a sizzling burger, a gourmet pizza, or exotic sushi, Orderly has it all. </p>
<p className="font-semibold text-lg text-red-600 py-2">Get in Order with Orderly</p>
<div className="btn-container">
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Order Now
  </span>
</button>
    <a href="/menu" className='text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3'>Show Menu</a>
</div>
        </div>
        <div className='banner-image w-full md:w-1/2 p-3 flex justify-end'>
            <img src={PBanner} alt="banner" className='max-h-95' />
        </div>
    </div>
  )
}

export default Banner