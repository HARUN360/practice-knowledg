
import { FaBeer } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark,handleReadingTime}) => {
    // console.log(blog);
    const {id,cover, author_img, author, title, reading_time, posted_date, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt="" className='w-full'/>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                <img src={author_img} alt="" className='w-16'/>
                <div>
                    <h3>{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(blog)}><FaBeer /></button>
                </div>
            </div>
            <h3 className='text-3xl text-[#111111] font-bold'>{title}</h3>
            <p>
                {
                    // hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=> handleReadingTime(id, reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

export default Blog;