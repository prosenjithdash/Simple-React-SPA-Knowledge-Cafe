import PropTypes from 'prop-types'
const BookMark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='bg-white p-4 m-4 rounded-lg'>
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};
BookMark.propTypes = {
    bookmark: PropTypes.object
}
export default BookMark;