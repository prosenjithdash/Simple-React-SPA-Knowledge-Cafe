import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className='w-[90%] max-w-[1440px] mx-auto my-10'>
    
      <Header></Header>

      {/* 42-3 Set Layout And Make React Responsive */}
      <div className='md:flex lg:flex my-10'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
      
    </div>
  )
}

export default App
