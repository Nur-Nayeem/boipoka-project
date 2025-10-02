import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import ReadBooks from '../components/listedBooks/ReadBooks';
import WishBooks from '../components/listedBooks/WishBooks';


const ListedBooks = () => {
    const [wish, setWhish] = useState(false);
    const [read, setRead] = useState(true);
    const [categoryTOggle, setCategoryToggle] = useState(true)
    const handleRead = () => {
        setRead(true)
        setWhish(false)
        setCategoryToggle(true)
    }
    const handleWish = () => {
        setWhish(true)
        setRead(false)
        setCategoryToggle(false)
    }
    return (
        <div className='px-2.5'>
            <h1 className='bg-[#13131310] text-[#131313] font-bold text-3xl py-8 text-center'>Books</h1>
            <div className="relative w-48 mx-auto my-8 rounded-xl">
                <select
                    defaultValue="Sort By"
                    className="rounded-xl w-full appearance-none bg-[#23BE0A] text-white py-4 px-2 pr-10 "
                >
                    <option disabled value="Sort By">Sort By</option>
                    <option value="Rating">Rating</option>
                    <option value="Number of pages">Number of pages</option>
                    <option value="Publisher year">Publisher year</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                    ▼
                </ChevronDown>
            </div>

            <div>
                <div className='flex'>
                    <button onClick={handleRead} className={`cursor-pointer py-3.5 px-4 text-lg  border-[#13131330] rounded-t-xl ${read ? ' border-1 border-b-0 text-[#13131395] ' : 'border-0 border-b-1 text-[#13131350]'} `}>Read Books</button>
                    <button onClick={handleWish} className={`cursor-pointer py-3.5 px-4 text-lg  border-[#13131330] rounded-t-xl ${wish ? ' border-1 border-b-0 text-[#13131395] ' : 'border-0 border-b-1 text-[#13131350]'} `}>Wishlist Books</button>
                    <div className='flex-1 border-b-1 border-[#13131330]'></div>
                </div>
                <div>
                    {
                        categoryTOggle ? <ReadBooks /> : <WishBooks />
                    }
                </div>
            </div>


        </div >
    )
}

export default ListedBooks