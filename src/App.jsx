import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {

  // 42-5 Add Bookmark Button And Lift Up The State

  // hold data
  const [bookMark, setBookMark] = useState([]);

  // handle bookmark
  const handleMark = (blog) => {
    console.log('HandleBookMark.')
    console.log(blog)
  }

  return (
    <div className='w-[90%] max-w-[1440px] mx-auto my-10'>

      <Header></Header>

      {/* 42-3 Set Layout And Make React Responsive */}
      <div className='md:flex lg:flex my-10 gap-5'>

       {/* 42-5 Add Bookmark Button And Lift Up The State */}
        <Blogs handleMark={handleMark}></Blogs>
        
        <BookMarks></BookMarks>
      </div>

    </div>
  )
}

export default App
