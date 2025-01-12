import React from 'react'
import chipIcon from '../assets/Chip_Card-1@2x.png'
import circleOverLapIcon1 from '../assets/Group 17.svg'
import circleIcon2 from '../assets/circleIcon2.svg'

const BalanceCard = (props) => {
    const color=props.color
  return (
    <div className={`col-span-1 md:col-span-3 h-48  w-80 ${color=="blue" ? 'bg-blue-600 shadow-sm md:mr-10 md:mb-1 mb-4 text-white ' : "bg-white shadow-md md:shadow-sm  md:ml-5 text-slate-600"} ml-2 rounded-2xl`}>
        <div className='flex justify-between m-2'>
            <div className='p-1 ml-3'>
            <p className='text-slate-300 text-sm'>Balance</p>
            <h2>$5,756</h2>
            </div>
            <img src={chipIcon} className='h-10 w-10 p-1 mt-1' alt="" />
        </div>
        <div className='flex justify-evenly m-2'>
            <div className='p-1 mr-8'>
            <p className=' text-slate-300 text-sm text-wrap'>CARD HOLDER</p>
            <h2>Eddy Cusuma</h2>
            </div>
            <div className='mr-10'>
            <p className='text-slate-300 text-sm text-wrap'>VALID THRU</p>
            <p>12/22</p>
            </div>
        </div>
        <div className='flex justify-around mr-14 bg-opacity-20 bg-slate-50 items-center  shadow-inner h-14 w-full'>
            <div className='p-1 mr-8'>
            
            <h2 className={`p-1 ${color==='blue' ? 'text-white': 'text-slate-600' }  text-wrap`}>3788 **** **** 1234</h2>
            </div>
            <div className='mr-8'>
            {
              color=='blue' ? <img src={circleOverLapIcon1} className='h-10 w-10' alt="" />: <img src={circleIcon2} className='h-10 w-10' alt="" />
            }
            </div>
        </div>
       
      
    </div>
  )
}

export default BalanceCard
