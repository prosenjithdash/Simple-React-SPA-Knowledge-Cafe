
// 42-3 Set Layout And Make React Responsive
import PropTypes from 'prop-types'; // ES6

const Blog = ({ blog, handleMark, handleMarkAsReading }) => {
    const {id, title, Cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        // 42-4 Display Blog Data And Hashtags

        <div>
            <img className='w-full h-[450px] rounded-[8px]' src={Cover} alt="" />
            <div className='md:flex md:justify-between lg:flex lg:justify-between mt-[34px] mb-[20px]'>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-5 items-center'>
                        <img className='w-[60px] h-[60px] rounded-[60px]' src={author_img} alt="" />
                        <div>
                            <h3 className='text-2xl'>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <p>{reading_time} min read</p>

                        {/* 42-5 Add Bookmark Button And Lift Up The State */}
                        {/* 42-6 Handle Bookmark State And Display Bookmark */}
                        <p onClick={()=>handleMark(blog)}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                            <path d="M14.593 1.322C15.693 1.45 16.5 2.399 16.5 3.507V19L9 15.25L1.5 19V3.507C1.5 2.399 2.306 1.45 3.407 1.322C7.12319 0.890633 10.8768 0.890633 14.593 1.322Z" stroke="#111111" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></p>
                    </div>
                </div>
            </div>
            <h2 className='text-4xl mb-[16px]'>{title} </h2>
            <p className='mb-[21px]'>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a href="">  #{ hashtag} </a></span>)
                }
            </p>
            <div className='border-b-2  mb-[40px] '>
                <button onClick={() => handleMarkAsReading(id,reading_time)} className='text-blue-600 border-b-2 border-blue-700 w-[100px] mb-[32px] pb-0'>Mark as Read</button>
            </div>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleMark: PropTypes.func,
    handleMarkAsReading: PropTypes.func
}
export default Blog;