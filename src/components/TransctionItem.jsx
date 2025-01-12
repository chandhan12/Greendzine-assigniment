import React from 'react'

const TransctionItem = (props) => {
    const {image,title,date,amount,symbol}=props

  return (
    <div className='flex gap-2 mx-1 p-2'>
      <div >
          <img src={image} className='h-10 w-10' alt="" />
        </div>
        <div className='flex  justify-between w-full '>
        <div>
            <h1 className='text-base text-slate-700 text-wrap'>{title}</h1>
            <p className='text-sm text-wrap text-slate-400'>{date}</p>
        </div>
        <div>
            <p className={`${symbol==="-" ? 'text-red-500':'text-green-500'}`}><span>{symbol}</span>{amount}</p>
        </div>
        </div>
                
    </div>
  )
}

export default TransctionItem
