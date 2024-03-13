
//42-2 Create Fake Data For The Blogs And Load Data
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

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

            <div>
                {
                    blogs.map(blog => <Blog  blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;