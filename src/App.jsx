import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import VerifyOtp from './pages/VerifyOtp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/verifyUser' element={<VerifyOtp/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}





export default App
