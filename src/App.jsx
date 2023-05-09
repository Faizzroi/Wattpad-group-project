import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Login from './assets/pages/Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-full w-screen bg-red-500'>
      <div className='h-[5rem] w-12 bg-teal-600'></div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
