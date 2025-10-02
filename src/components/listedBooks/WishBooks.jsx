import React from 'react'
import { useOutletContext } from 'react-router'
import ReadBookCard from './BookCard';
import NothingFound from './NothingFound';

const WishBooks = () => {
    const { addToWiahList } = useOutletContext();
    return (
        <div>
            {
                addToWiahList.length === 0 ? <NothingFound /> :
                    addToWiahList.map(book => <ReadBookCard key={book.bookId} book={book} />)
            }
        </div>
    )
}

export default WishBooks