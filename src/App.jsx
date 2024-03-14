import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {

  // 42-5 Add Bookmark Button And Lift Up The State

  // hold data for Bookmarks data
  const [bookMarks, setBookMarks] = useState([]);

  // hold data for Reading data
  const [readingTime, setReadingTime] = useState(0);

  // handle bookmarks data
  const handleMark = (blog) => {
    console.log('HandleBookMark.')
    console.log(blog)
    // 42-6 Handle Bookmark State And Display Bookmark
    const newBlogs = [...bookMarks,blog ];
    setBookMarks(newBlogs)

  }

  {/* 42-7 Add Time When Marked As Read */ }

  // handle readingTime data
  const handleMarkAsReading = (time) => {
    // console.log('HandleBookMark Time.',time)
    setReadingTime(readingTime + time)

  }


  return (
    <div className='w-[90%] max-w-[1440px] mx-auto my-10'>

      <Header></Header>

      {/* 42-3 Set Layout And Make React Responsive */}
      <div className='md:flex lg:flex my-10 gap-5'>

        {/* 42-5 Add Bookmark Button And Lift Up The State */}
        {/* 42-7 Add Time When Marked As Read */}
        <Blogs handleMark={handleMark} handleMarkAsReading={handleMarkAsReading}></Blogs>

        <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </div>

    </div>
  )
}

export default App
