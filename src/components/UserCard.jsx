import React from 'react'

const UserCard = (props) => {
    const {photo,name,role}=props
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={photo} className='w-14 h-14 rounded-full' alt="" />
      <h2 className='text-slate-600 text-lg'>{name}</h2>
      <p className='text-slate-400 text-base'>{role}</p>
    </div>
  )
}

export default UserCard
