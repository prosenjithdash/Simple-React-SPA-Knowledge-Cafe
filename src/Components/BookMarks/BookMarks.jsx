// 42-3 Set Layout And Make React Responsive
import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark';



// 42-6 Handle Bookmark State And Display Bookmark
const BookMarks = ({ bookMarks }) => {
    // const [title] = bookMark;
    
    return (
        <div className="md:w-1/3 lg:w-1/3">
            <h2 className="text-3xl">Bookmarked Blogs : {bookMarks.length}</h2>

            <div>
                {
                    bookMarks.map(bookmark => <BookMark bookmark={bookmark}></BookMark>)
                }
            </div>
            
        </div>
    );
};
BookMarks.propTypes = {
    bookmark: PropTypes.object
}
export default BookMarks;