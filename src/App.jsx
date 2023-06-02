import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Read from './pages/Read'
import Profile from './pages/Profile'

function App() {

  return (
    <div className='h-screen w-screen overflow-y-auto' id='main-parent'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Login/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
