import React from 'react'

const SidebarItem = (props) => {
    const {icon,itemName,color}=props
  return (
    <div className={`flex gap-2 mx-4 my-2 rounded-lg ${color==='blue' ? 'text-blue-500' :'text-slate-500' } hover:bg-slate-100 hover:cursor-pointer hover:rouded-md w-full`}>
      <div className='p-2'>
        <img src={icon} alt="" />
      </div>
      <div className='p-2'>
        <p className='text-base'>{itemName}</p>
      </div>
    </div>
  )
}

export default SidebarItem
