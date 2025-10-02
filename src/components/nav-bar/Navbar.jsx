import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

import { Link, NavLink } from 'react-router'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const links = <>
        <NavLink to="/">
            {({ isActive }) => (
                <span className={`text-lg text-[#13131380] border-1 border-white hover:border-[#23BE0A] hover:text-[#23BE0A] hover:font-semibold py-3 px-4 rounded-lg  ${isActive ? "active" : " "}`}>Home</span>
            )}
        </NavLink>
        <NavLink to='/listed-books'>
            {({ isActive }) => (
                <span className={`text-lg text-[#13131380] border-1 border-white hover:border-[#23BE0A] hover:text-[#23BE0A] hover:font-semibold py-3 px-4 rounded-lg  ${isActive ? "active" : " "}`}>Listed Books</span>
            )}
        </NavLink>
        <NavLink to='/page-to-read'>
            {({ isActive }) => (
                <span className={`text-lg text-[#13131380] border-1 border-white hover:border-[#23BE0A] hover:text-[#23BE0A] hover:font-semibold py-3 px-4 rounded-lg  ${isActive ? "active" : " "}`}>Pages to Read</span>
            )}
        </NavLink>
    </>
    return (
        <header className='shadow-2xs py-5 bg-white sticky z-50 top-0 w-full '>
            <nav className='max-w-[1280px] mx-auto px-2.5 flex justify-between items-center'>
                <Link to="/">
                    <h1 className='font-bold text-3xl text-[#131313]'>Book Vibe</h1>
                </Link>
                <div className='lg:flex items-center gap-10 hidden'>
                    {
                        links
                    }
                </div>
                <button className=' lg:hidden z-20' onClick={() => setToggle(!toggle)}>
                    {toggle ?
                        <X className='z-20' />
                        :
                        <Menu className='z-20' />


                    }
                </button>

                <div className={`lg:hidden absolute  flex-col  top-0  right-0 p-2 z-10 gap-10 min-h-screen w-1/2 items-center py-32 bg-white/10 backdrop-blur-sm duration-1000  ${!toggle ? 'hidden' : 'flex'}`}>
                    {
                        links
                    }
                    <div className='flex flex-col items-center gap-8 '>
                        <button className='py-4 px-6 bg-[#23BE0A] text-white text-lg font-semibold rounded-lg cursor-pointer'>Sign In</button>
                        <button className='py-4 px-6 bg-[#59C6D2] text-white text-lg font-semibold rounded-lg cursor-pointer'>Sign Up</button>
                    </div>
                </div>
                <div className='lg:flex items-center gap-8 hidden'>
                    <button className='py-4 px-6 bg-[#23BE0A] text-white text-lg font-semibold rounded-lg cursor-pointer'>Sign In</button>
                    <button className='py-4 px-6 bg-[#59C6D2] text-white text-lg font-semibold rounded-lg cursor-pointer'>Sign Up</button>
                </div>



            </nav>
        </header>
    )
}

export default Navbar