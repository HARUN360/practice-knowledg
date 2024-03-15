
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingtime, setReadingtime] = useState(0);
  const handleAddToBookmark = blog => {
    // console.log('this is a book mark', blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
  const handleReadingTime = (id,time) => {
      // console.log('time',time);
      const newRedingTime = readingtime + time;
      setReadingtime(newRedingTime)
      // remove bookmark id
    // console.log('remove id', id);
    const reaminingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(reaminingBookmarks);
  }
  return (
    <>
     <Header></Header>
     <div className='container mx-auto flex '>
       <Blogs handleAddToBookmark = {handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
       <Bookmarks bookmarks = {bookmarks} readingtime={readingtime}></Bookmarks>
     </div>
    </>
  )
}

export default App
