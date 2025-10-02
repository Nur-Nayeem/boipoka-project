import React from 'react'
import BookCard from './BookCard'
import { useOutletContext } from 'react-router'
import NothingFound from './NothingFound'

const ReadBooks = () => {
    const { addToRead } = useOutletContext()
    console.log(addToRead);

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