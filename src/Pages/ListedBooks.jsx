import { ChevronDown } from 'lucide-react'
import { Suspense, use, useEffect, useState } from 'react'
import ReadBooks from '../components/listedBooks/ReadBooks';
import WishBooks from '../components/listedBooks/WishBooks';
import { getStoredItems } from '../utility/storageDB';
const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const [wishList, setWishList] = useState([])
    const [wish, setWhish] = useState(false)
    const [read, setRead] = useState(true)
    const [categoryToggle, setCategoryToggle] = useState(true)
    const [sort, setSort] = useState("")
    const [booksData, setBooksData] = useState([])

    useEffect(() => {
        fetch("booksData.json")
            .then(res => res.json())
            .then(data => {
                setBooksData(data)

                const storedBookDataForRead = getStoredItems("readList")
                const storedBookDataForWish = getStoredItems("wishList")

                const ConvertedStoredBooksForRead = storedBookDataForRead.map(id => parseInt(id))
                const ConvertedStoredBooksForWish = storedBookDataForWish.map(id => parseInt(id))

                const myReadList = data.filter(book => ConvertedStoredBooksForRead.includes(book.bookId))
                const myWishList = data.filter(book => ConvertedStoredBooksForWish.includes(book.bookId))

                setReadList(myReadList)
                setWishList(myWishList)
            })
            .catch(err => console.error("Error loading book data:", err))
    }, [])

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

    const handleSort = (type) => {
        setSort(type);

        if (type === "pages") {
            const sortedByPageForRead = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            const sortedByPageForWish = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPageForRead);
            setWishList(sortedByPageForWish);
            return;
        }

        if (type === "ratings") {
            const sortedByratingForRead = [...readList].sort((a, b) => a.rating - b.rating);
            const sortedByratingForWish = [...wishList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByratingForRead); // ✅ fixed name
            setWishList(sortedByratingForWish);
            return;
        }

        if (type === "year") {
            const sortedByYearForRead = [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            const sortedByYearForWish = [...wishList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortedByYearForRead); // ✅ fixed name
            setWishList(sortedByYearForWish);
            return;
        }
    }
    return (
        <div className='px-2.5'>
            <h1 className='bg-[#13131310] text-[#131313] font-bold text-3xl py-8 text-center'>Books</h1>
            <div className="w-max mx-auto my-8 rounded-lg">
                <details className="dropdown ">
                    <summary className="btn bg-green-500 text-white m-1 rounded-lg">sort by : {sort ? sort : ""}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("pages")}>pages</a></li>
                        <li><a onClick={() => handleSort("ratings")}>ratings</a></li>
                        <li><a onClick={() => handleSort("year")}>year</a></li>
                    </ul>
                </details>
            </div>



            <div>
                <div className='flex'>
                    <button onClick={handleRead} className={`cursor-pointer py-3.5 px-4 text-lg  border-[#13131330] rounded-t-xl ${read ? ' border-1 border-b-0 text-[#13131395] ' : 'border-0 border-b-1 text-[#13131350]'} `}>Read Books</button>
                    <button onClick={handleWish} className={`cursor-pointer py-3.5 px-4 text-lg  border-[#13131330] rounded-t-xl ${wish ? ' border-1 border-b-0 text-[#13131395] ' : 'border-0 border-b-1 text-[#13131350]'} `}>Wishlist Books</button>
                    <div className='flex-1 border-b-1 border-[#13131330]'></div>
                </div>

                <div>
                    {
                        categoryToggle ? <ReadBooks data={readList} /> : <WishBooks data={wishList} />
                    }
                </div>
            </div>


        </div >
    )
}

export default ListedBooks