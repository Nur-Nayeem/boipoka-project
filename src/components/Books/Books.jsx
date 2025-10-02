import React, { Suspense, use } from 'react'
import Book from './Book'

const Books = ({ data }) => {

    return (
        <div className='my-20'>
            <h1 className='text-center mb-7 text-[#131313] text-5xl font-bold font-playfair'>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        data.map(book => <Book key={book.bookId} book={book} />)
                    }

                </div>
            </Suspense>
        </div>
    )
}

export default Books