import ReadBookCard from './BookCard';
import NothingFound from './NothingFound';

const WishBooks = ({ data }) => {
    return (
        <div>
            {
                data.length === 0 ? <NothingFound /> :
                    data.map(book => <ReadBookCard key={book.bookId} book={book} />)
            }
        </div>
    )
}

export default WishBooks