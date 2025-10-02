import { Star } from 'lucide-react'
import React from 'react'

const Book = ({ book }) => {
    const { image, bookName, author, category, tags, rating } = book;
    return (
        <div className='border-1 border-[#13131315] p-6'>
            <figure className='bg-[#F3F3F3] rounded-2xl py-8 flex justify-center items-center'>
                <img className='w-36 h-44' src={image} alt="" />
            </figure>
            <div>
                <div className='flex gap-3 text-[#23BE0A] font-medium mt-6 mb-4'>
                    {
                        tags.map((tag, index) => <p className='bg-[#23BE0A10] px-3' key={index}>{tag}</p>)
                    }
                </div>
                <div className='mb-10'>
                    <h2 className='text-[#131313] font-playfair font-bold mb-4'>{bookName}</h2>
                    <p className='text-[#13131380] font-medium'>By : {author}</p>
                </div>
                <div className='flex justify-between items-center text-[#13131380] font-medium'>
                    <span>{category}</span>
                    <span className='flex gap-2.5 items-center'>{rating} <Star /></span>
                </div>
            </div>
        </div>
    )
}

export default Book