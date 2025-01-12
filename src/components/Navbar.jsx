import React from 'react'
import settingIcon from '../assets/SettingsIcon.svg'
import notificationIcon from '../assets/notificationIcon.svg'
import profilepic from '../assets/profile pic.png'
import profileImg from '../assets/profileimg.png'

const Navbar = () => {
  return (
    <div className='flex  justify-between  shadow-sm bg-white'>
      <div className='m-2  '>
        <h1 className='mt-4 ml-4 hover:cursor-pointer'>Overview</h1>
      </div>
      <div className='m-2 p-2 flex gap-5'>
        <div className='hidden md:block'>
        <div className='bg-slate-300 rounded-2xl p-1 h-8 w-56 flex   '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-slate-400 ml-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        <input type="text" className='bg-slate-300 hidden md:block rounded-2xl ml-2 placeholder-slate-400 '  placeholder='Search for something'/>
        
        </div>
        </div>
        <img src={settingIcon} alt="" className=' hidden md:block rounded-full h-8  w-8 hover:cursor-pointer' />
        <img src={notificationIcon} alt="" className=' hidden md:block rounded-full h-8  w-8 hover:cursor-pointer' />
        <img src={profileImg} alt="" className='rounded-full h-8  w-8 hover:cursor-pointer mr-4' />
      </div>
    </div>
  )
}

export default Navbar
