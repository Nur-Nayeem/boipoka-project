import React from 'react'
import './App.css'
import Navbar from './components/nav-bar/Navbar'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router'
const App = () => {
  return (
    <>
      <Navbar />
      <main className='max-w-[1280px] mx-auto min-h-[calc(100vh-284px)]'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App