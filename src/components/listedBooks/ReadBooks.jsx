import React, { use, useEffect } from 'react'
import BookCard from './BookCard'
import { useOutletContext } from 'react-router'
import NothingFound from './NothingFound'
import { getStoredItems } from '../../utility/storageDB'

const ReadBooks = ({ data }) => {
    const dta = use(data);
    const { addToRead, setAddToRead } = useOutletContext()
    useEffect(() => {
        const storedReadBooks = getStoredItems("readList");
        const ConvertedStoredBooks = storedReadBooks.map(id => parseInt(id))
        const myReadList = dta.filter(book => ConvertedStoredBooks.includes(book.bookId));
        setAddToRead(myReadList)
    }, [])


    return (
        <div>
            {
                addToRead.length === 0 ? <NothingFound /> :
                    addToRead.map(book => <BookCard key={book.bookId} book={book} />)
            }

        </div>
    )
}

export default ReadBooks