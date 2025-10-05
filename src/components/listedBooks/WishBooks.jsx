import React, { use, useEffect } from 'react'
import ReadBookCard from './BookCard';
import NothingFound from './NothingFound';
import { getStoredItems } from '../../utility/storageDB';
import { useOutletContext } from 'react-router';

const WishBooks = ({ data }) => {
    const dta = use(data);
    const { addToWiahList, setAddToWiahList } = useOutletContext()
    useEffect(() => {
        const storedWishBooks = getStoredItems("wishList");
        const ConvertedStoredBooks = storedWishBooks.map(id => parseInt(id))
        const myReadList = dta.filter(book => ConvertedStoredBooks.includes(book.bookId));
        setAddToWiahList(myReadList)
    }, [])
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