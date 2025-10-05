import React, { useState } from 'react'
import './App.css'
import Navbar from './components/nav-bar/Navbar'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router'
import { addToReadOrWithList, getStoredItems } from './utility/storageDB'
const App = () => {
  const [addToRead, setAddToRead] = useState([]);
  const [addToWiahList, setAddToWiahList] = useState([]);

  const handleAddToList = (book) => {
    const availableStoredBooks = getStoredItems("readList");
    if (availableStoredBooks.includes(book.bookId)) {
      alert("already exist")
      return;
    }
    addToReadOrWithList(book.bookId, "readList")
    setAddToRead([...addToRead, book])
  }
  const handleaddToWiahList = (book) => {
    const availableStoredBooks = getStoredItems("wishList");
    if (availableStoredBooks.includes(book.bookId)) {
      alert("already exist")
      return;
    }
    addToReadOrWithList(book.bookId, "wishList")
    setAddToWiahList([...addToWiahList, book])
  }

  return (
    <>
      <Navbar />
      <main className='max-w-[1280px] mx-auto min-h-[calc(100vh-284px)]'>
        <Outlet context={{ handleAddToList, handleaddToWiahList, addToRead, setAddToRead, addToWiahList, setAddToWiahList }} />
      </main>
      <Footer />
    </>
  )
}

export default App