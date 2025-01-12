import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const VerifyOtp = () => {
    const [errorMsg,setErrorMsg]=useState(false)
    const [errorOtp,setErrorOtp]=useState(false)
    const[resendOtp,setResendOtp]=useState(false)
    const [isActive,setIsActive]=useState(false)
    const [count,setCount]=useState(30)
    const[email,setEmail]=useState()
    const [otpBtn,setOtpBtn]=useState(true)
    const [sentOtp,setSentOtp]=useState(false)
    const inputRef=useRef()
    const navigate=useNavigate()

    useEffect(()=>{
        const userEmail=localStorage.getItem("email")
        if(userEmail===null){
            setErrorMsg(true)
        }
        setEmail(userEmail)
    },[])

    const sendOtp=()=>{
      setErrorOtp(false)
      const otp=Math.floor(Math.random()*1000000)
      localStorage.setItem("otp",otp)
      alert(`your otp: ${otp}`)

      setOtpBtn(false)
      setSentOtp(true)
      setIsActive(true)
      setCount(30)
      

    }
    
    useEffect(()=>{
      let interval;
      if(isActive){
        setTimeout(()=>{
          localStorage.setItem("otp","")
          setResendOtp(true)
          setIsActive(false)
        },30000)
        interval=setInterval(()=>{
          setCount((prevCount) => Math.max(prevCount - 1, 0));
        },1000)
      }

      return ()=>{
        clearInterval(interval)
      }

    },[isActive])

    const Verify=()=>{
      const otp=inputRef.current.value
          const  originalOtp=localStorage.getItem("otp")
      if(otp===originalOtp){
        alert("otp verifed successfull")
        navigate('/dashboard')
      }
      else{
        setErrorOtp(true)
      }

    }
  return (
    <>
     <div className=' ml-6 mt-5'>
      <h1 className='font-semibold'>Your Logo</h1>
    </div>
  
    <div className='flex flex-col justify-center items-center mt-10 gap-4'>
      <h1 className='text-xl font-semibold text-slate-700'>Verify otp</h1>
      {errorMsg ? <p className='text-red-500'>Please login and verify email</p> : " "}
      <p>Email: {email}</p>
      {
        otpBtn ? <button className='p-1 bg-blue-500 rounded-md h-8 w-48 text-white' onClick={sendOtp}  >Send otp </button> :" "
      }
      {
        sentOtp ? <div className='flex flex-col gap-3 justify-center items-center'>
          <input type="number" ref={inputRef} placeholder='Enter otp' className='bg-slate-100 p-1 pl-4 w-64 h-8 rounded-md text-black placeholder-slate-400'/>
          <p className='mt-2'>Your otp expries in <span className='text-red-500'>{count}</span> seconds</p>
          {
            errorOtp ? <p className='text-red-500'>Invalid otp or Expried</p> :" "
          }
          {
            resendOtp ? <p className='text-green-500 hover:cursor-pointer' onClick={sendOtp}>Resend Otp ?</p> :" "
          }
          
          <button className='p-1 bg-blue-500 rounded-md h-8 w-32 text-white' onClick={Verify}  >Verify otp </button>
        </div> : " "
      }
    </div>
    </>
  )
}

export default VerifyOtp
