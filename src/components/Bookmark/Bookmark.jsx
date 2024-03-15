

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    // console.log(bookmark.title);
    
    return (
        <div>
            <div className='bg-slate-200 p-4 m-4 rounded-xl'> 
            <h3 className='text-xl'>{title}</h3>
        </div>
            
        </div>
    );
};

export default Bookmark;