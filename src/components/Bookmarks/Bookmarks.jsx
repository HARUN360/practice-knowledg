import Bookmark from "../Bookmark/Bookmark";




const Bookmarks = ({bookmarks,readingtime}) => {
    return (
        <div className="w-1/3">
            <h3 className='text-xl p-4 bg-gray-400 text-center mb-6 rounded-3xl mx-10'>Spent time on read : {readingtime} min</h3>
          <div className='bg-gray-200'></div>
            <h3 className="text-2xl text-[#111111] font-bold">Bookmarked Blogs :{bookmarks.length}</h3>
            {/* <Bookmark></Bookmark> */}
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} readingtime={readingtime}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;