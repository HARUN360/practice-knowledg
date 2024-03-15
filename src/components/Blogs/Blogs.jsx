import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark,handleReadingTime}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect( ()=>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='w-2/3'>
            <h3>Blogs: {blogs.length}</h3>
            {
                blogs.map(blog => <Blog key={blog.id} blog = {blog} handleAddToBookmark = {handleAddToBookmark} handleReadingTime ={handleReadingTime}></Blog>)
            }
        </div>
    );
};

export default Blogs;