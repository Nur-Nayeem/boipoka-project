import React from 'react'
import { useLoaderData, useOutletContext, useParams } from 'react-router'

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const detailsBook = data.find(book => book.bookId === bookId);
    const { bookName, image, author, category, tags, rating, review, totalPages, publisher, yearOfPublishing } = detailsBook;


    const { handleAddToList, handleaddToWiahList } = useOutletContext();



    return (
        <div className='flex px-2.5 flex-col lg:flex-row gap-12 my-4'>
            <figure className='flex-1  bg-[#13131310] rounded-2xl p-[74px]'>
                <img className='w-full h-full' src={image} alt="" />
            </figure>
            <div className='flex-1 '>
                <div className='border-b-1 border-[#13131315] py-6'>
                    <h1 className='text-[40px] text-[#131313] font-bold '>{bookName}</h1>
                    <p className='text-xl font-medium text-[#13131380]'>By: {author}</p>
                </div>

                <p className='border-b-1 border-[#13131315] py-4'>{category}</p>
                <div className='mt-6'>
                    <p>Review: {review}</p>
                </div>
                <div className='flex gap-3  font-medium mt-6 mb-4 border-b-1 border-[#13131315] py-6'>
                    <p>Tag</p>
                    {
                        tags.map((tag, index) => <p className='bg-[#23BE0A10] text-[#23BE0A] px-3' key={index}>{tag}</p>)
                    }
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th className='text-start'>Number of Pages:</th>
                            <td className='pl-5'>{totalPages}</td>
                        </tr>
                        <tr>
                            <th className='text-start'>Publisher:</th>
                            <td className='pl-5'>{publisher}</td>
                        </tr>
                        <tr>
                            <th className='text-start'>Year of Publishing:</th>
                            <td className='pl-5'>{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <th className='text-start'>Rating:</th>
                            <td className='pl-5'>{rating}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex items-center gap-5 my-8'>
                    <button onClick={() => handleAddToList(detailsBook)} className='border-1 py-4 px-6 border-[#13131330]  text-[#131313] text-lg font-semibold rounded-lg cursor-pointer'>Read</button>
                    <button onClick={() => handleaddToWiahList(detailsBook)} className='py-4 px-6 bg-[#50B1C9] text-white text-lg font-semibold rounded-lg cursor-pointer'>Wishlist</button>

                </div>

            </div>
        </div>
    )
}

export default BookDetails