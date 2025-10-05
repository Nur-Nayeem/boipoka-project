import React, { use, useEffect } from 'react'
import BookCard from './BookCard'
import NothingFound from './NothingFound'
const ReadBooks = ({ data }) => {


    return (
        <div>
            {
                data.length === 0 ? <NothingFound /> :
                    data.map(book => <BookCard key={book.bookId} book={book} />)
            }

        </div>
    )
}

export default ReadBooks