
//42-2 Create Fake Data For The Blogs And Load Data

import { useEffect, useState } from "react";

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
        <div>
            <h2>Total Blogs: { blogs.length}</h2>
        </div>
    );
};

export default Blogs;