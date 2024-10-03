import { IconBallFootball, IconBlender, IconBooks, IconDeviceMobile, IconDeviceWatch, IconDiamond, IconRazorElectric, IconSofa, IconTractor } from '@tabler/icons-react'
import React from 'react'

export default function Topcategories() {
  return (
    <div className=' m-5 mt-12 '>
      <h2 className='m-2 text-[20px] font-bold text-gray-700'>Our Top  Categories</h2>
      <div className=".top-category flex justify-around  overflow-x-auto gap-5">
        <div className='flex justify-center items-center flex-col'>
          <div className='hover:bg-[#e6e6e6] mb-2 h-16 w-16 bg-[#eeeeee] rounded-full cursor-pointer flex justify-center items-center'>
            <IconDeviceMobile color='#374151' size={40} stroke={1} />
          </div>
          <p className='text-[#686868] font-semibold'>Mobiles</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <div className=' hover:bg-[#e6e6e6] mb-2 h-16 w-16 bg-[#eeeeee] rounded-full cursor-pointer flex justify-center items-center'>
            <IconDiamond  color='#374151'  size={40} stroke={1} />
          </div>
          <p className='text-[#686868] font-semibold'>Jewelry</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <div className='hover:bg-[#e6e6e6] mb-2 h-16 w-16 bg-[#eeeeee] rounded-full cursor-pointer flex justify-center items-center'>
            <IconBooks  color='#374151'  size={40} stroke={1} />
          </div>
          <p className='text-[#686868] font-semibold'>Books</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <div className='hover:bg-[#e6e6e6] mb-2 h-16 w-16 bg-[#eeeeee] rounded-full cursor-pointer flex justify-center items-center'>
            <IconDeviceWatch color='#374151'  size={40} stroke={1} />
          </div>
          <p className='text-[#686868] font-semibold'>Watches</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <div className='hover:bg-[#e6e6e6] mb-2 h-16 w-16 bg-[#eeeeee] rounded-full cursor-pointer flex justify-center items-center'>
            <IconSofa  color='#374151'  size={40} stroke={1} />
          </div>
          <p className='text-[#686868] font-semibold'>Furniture</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <div className='hover:bg-[#e6e6e6] mb-2 h-16 w-16 bg-[#eeeeee] rounded-full cursor-pointer flex justify-center items-center'>
            <IconBallFootball   color='#374151'  size={40} stroke={1} />
          </div>
          <p className='text-[#686868] font-semibold'>Sports</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <div className='hover:bg-[#e6e6e6] mb-2 h-16 w-16 bg-[#eeeeee] rounded-full cursor-pointer flex justify-center items-center'>
            <IconTractor    color='#374151'  size={40} stroke={1} />
          </div>
          <p className='text-[#686868] font-semibold'>Toys</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <div className='hover:bg-[#e6e6e6] mb-2 h-16 w-16 bg-[#eeeeee] rounded-full cursor-pointer flex justify-center items-center'>
            <IconRazorElectric   className='text-[#374151]'  color='#374151'  size={40} stroke={1} />
          </div>
          <p className='text-[#686868] font-semibold'>Electronics</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <div className='hover:bg-[#e6e6e6] mb-2 h-16 w-16 bg-[#eeeeee] rounded-full cursor-pointer flex justify-center items-center'>
            <IconBlender    className='text-[#374151]'  color='#374151'  size={40} stroke={1} />
          </div>
          <p className='text-[#686868] font-semibold'>Blenders</p>
        </div>
      </div>
    </div>
  )
}
