import React, { useState } from 'react'
import './App.css'
import Navbar from './components/nav-bar/Navbar'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router'
const App = () => {
  const [addToRead, setAddToRead] = useState([]);
  const [addToWiahList, setAddToWiahList] = useState([]);

  const handleAddToList = (book) => {
    setAddToRead([...addToRead, book])
  }
  const handleaddToWiahList = (book) => {
    setAddToWiahList([...addToWiahList, book])
  }

  return (
    <>
      <Navbar />
      <main className='max-w-[1280px] mx-auto min-h-[calc(100vh-284px)]'>
        <Outlet context={{ handleAddToList, handleaddToWiahList, addToRead, addToWiahList }} />
      </main>
      <Footer />
    </>
  )
}

export default App