// 42-3 Set Layout And Make React Responsive
import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark';



// 42-6 Handle Bookmark State And Display Bookmark
const BookMarks = ({ bookMarks, readingTime }) => {
    // const [title] = bookMark;
    
    return (
        <div className='md:w-1/3 lg:w-1/3'>
            <div className='bg-[#6047EC] p-4 my-4 rounded-lg text-white text-center'>
                <h3 className="text-4xl">Spent time on read :  {readingTime} min</h3>
            </div>
            <div className=" bg-gray-100 rounded-lg h-full">
                
                <h2 className="text-3xl text-center py-4">Bookmarked Blogs : {bookMarks.length}</h2>

                <div>
                    {
                        bookMarks.map((bookmark, idx) => <BookMark key={idx} bookmark={bookmark}></BookMark>)
                    }
                </div>

            </div>
        </div>
    );
};
BookMarks.propTypes = {
    bookMarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default BookMarks;