
//42-2 Create Fake Data For The Blogs And Load Data
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types"

// 42-7 Add Time When Marked As Read
const Blogs = ({ handleMark, handleMarkAsReading }) => {

    // hold data with useState
    const [blogs, setBlogs] = useState([]);

    // load data from blogs.json file
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[])
    
    return (
        <div className="md:w-2/3 lg:md:w-2/3">
            <h2>Total Blogs: {blogs.length}</h2>

            {/* 42-4 Display Blog Data And Hashtags */}
            <div>
                {
                    blogs.map(blog => <Blog
                        
                        key={blog.Id}

                        blog={blog}

                        handleMark={handleMark}

                        // 42-7 Add Time When Marked As Read
                        handleMarkAsReading={handleMarkAsReading}
                    >
                        </Blog>)
                }
            </div>
        </div>
    );
};
// 42-6 Handle Bookmark State And Display Bookmark

Blogs.propTypes = {
    handleMark: PropTypes.func,

    // 42-7 Add Time When Marked As Read
    handleMarkAsReading: PropTypes.func
}
export default Blogs;