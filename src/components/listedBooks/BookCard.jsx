import { Locate, Notebook, UsersRound } from 'lucide-react';
import React from 'react'

const BookCard = ({ book }) => {
    const { bookName, image, author, category, tags, rating, review, totalPages, publisher, yearOfPublishing } = book;
    return (
        <div className='p-6 flex flex-col px-2.5 md:flex-row items-center gap-6 border-1 border-[#13131315] my-6'>
            <figure className='bg-[#F3F3F3] rounded-2xl py-8 px-12 flex justify-center items-center'>
                <img className='w-36 h-44' src={image} alt="" />
            </figure>
            <div className='flex-1'>
                <div className=''>
                    <h1 className='text-2xl text-[#131313] font-playfair font-bold '>{bookName}</h1>
                    <p className='text-lg font-medium text-[#13131380]'>By: {author}</p>
                </div>
                <div className='flex gap-5  font-medium mt-6 mb-4 py-2 flex-wrap'>
                    <p>Tag</p>
                    {
                        tags.map((tag, index) => <p className='bg-[#23BE0A10] text-[#23BE0A] px-3' key={index}>{tag}</p>)
                    }
                    <div className='flex items-center gap-1.5'>
                        <Locate />
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className='flex items-center flex-wrap gap-10'>
                    <div className='flex items-center gap-1.5'>
                        <UsersRound />
                        <p>Publisher: {publisher}</p>
                    </div>
                    <div className='flex items-center gap-1.5'>
                        <Notebook />
                        <p>Page: {totalPages}</p>
                    </div>
                </div>
                <hr className='text-[#13131320] w-full my-2.5' />

                <div className='flex items-center flex-wrap gap-5 my-3'>
                    <div className='py-3 px-5 rounded-4xl text-[#FFAC33] bg-[#FFAC3315]'>Category: Classic</div>
                    <div className='py-3 px-5 rounded-4xl text-[#FFAC33] bg-[#FFAC3315]'>Rating: 4.5</div>
                    <button className='py-3 px-5 rounded-4xl text-white bg-[#23BE0A]'>View Details</button>
                </div>
            </div>
        </div>
    )
}

export default BookCard