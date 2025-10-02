import React from 'react'
const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse py-20">
                <figure className='lg:w-1/3'>
                    <img
                        src="hero-book.png"
                        className="w-full h-full rounded-lg"
                    />
                </figure>
                <div className='lg:w-2/3'>
                    <h1 className="text-6xl font-bold font-playfair text-[#131313] leading-relaxed mb-12">Books to freshen up your bookshelf</h1>

                    <button className='py-4 px-6 bg-[#23BE0A] text-white text-lg font-semibold rounded-lg cursor-pointer'>View The List</button>

                </div>
            </div>
        </div>
    )
}

export default Banner