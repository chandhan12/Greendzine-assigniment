import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginpic from '../assets/Rectangle 26@2x.png'
import GoogleIcon from '../assets/Google icon.svg'
import AppleIcon from '../assets/icons8-apple-logo.svg'

const Signin = () => {
  const [errorMsg, setErrorMsg] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  const login = (event) => {
    event.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    const userEmail = localStorage.getItem("email")
    const userPassword = localStorage.getItem("password")

    if (email === userEmail && password === userPassword) {
      alert("Login successful")
      navigate("/verifyUser")
    } else {
      setErrorMsg(true)
    }
  }

  return (
    <>
      <div className='ml-6 mt-5'>
        <h1 className='font-semibold'>Your Logo</h1>
      </div>
      <div className='flex h-screen justify-center w-full gap-5'>
        <div className='flex flex-wrap'>
          <div className='h-64 flex mt-32 ml-10 md:mt-10 sm:ml-10'>
            <div className='flex flex-col justify-center items-center'>
              <div className='mr-5 mb-5'>
                <h1 className='text-4xl font-bold mb-3 mr-4 text-slate-950'>Sign In to</h1>
                <h2 className='text-2xl font-semibold mb-10 text-slate-950'>Lorem ipsum is simply</h2>
              </div>
              <div>
                <p className='text-lg text-slate-700'>If you don't have an account, register</p>
                <p className='text-lg text-slate-700'>You can <span className='text-blue-600 hover:underline'><Link to={'/signup'}>Register here!</Link></span></p>
              </div>
            </div>
            <div className='hidden md:block ml-20 mr-5'>
              <div className='translate-y-28'>
                <img className="h-96" src={loginpic} alt="Login Graphic" />
              </div>
            </div>
          </div>
          <div className='h-64 col-span-12 sm:col-span-6 ml-10 mr-10 md:mt-10'>
            <div className='flex flex-col justify-center items-center'>
              <form onSubmit={login}>
                <h2 className='text-2xl font-bold mb-4'>Sign In</h2>
                <div className='flex flex-col gap-4'>
                
                  <input
                    type="email"
                    ref={emailRef}
                    className='bg-slate-100 p-1 pl-4 w-72 h-11 rounded-md text-black placeholder-slate-400'
                    placeholder='Enter Email'
                    required
                  />
                 
                  <input
                    type="password"
                    ref={passwordRef}
                    className='bg-slate-100 p-1 pl-4 w-72 h-11 rounded-md text-black placeholder-slate-400'
                    placeholder='Password'
                    required
                    minLength="6"
                  />
                  <div className='text-right'>
                    <p className='text-slate-500 hover:cursor-pointer hover:underline'>Forgot password?</p>
                  </div>
                 
                  {
                    errorMsg ? <p className='text-red-500'>Invalid credentials</p> : " "
                  }
                
                  <button type="submit" className='p-1 bg-blue-500 rounded-md h-11 w-72 text-white'>Login</button>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col p-4'>
                      <p className='text-slate-600 font-semibold text-base'>or continue with</p>
                      <div className='flex gap-4 mt-5 ml-5'>
                        <div className='bg-slate-400'>
                          <img className='h-6 w-6 bg-white hover:cursor-pointer' src={AppleIcon} alt="Apple Logo" />
                        </div>
                        <img className='h-6 w-6 hover:cursor-pointer' src={GoogleIcon} alt="Google Logo" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin
