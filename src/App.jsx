import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CreateBlog from './Components/CreateBlog'
import BlogList from './Components/BlogList'
import UpdateBlog from './Components/UpdateBlog'
import BlogDetails from './Components/BlogDetails'

function App() {

  return (
    <>
      
       <Router>
        <header style={{ backgroundColor: '#4CAF50', padding: '15px', color: 'white', textAlign: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <h1>Blog App</h1>
          </Link>
          <Link to="/create" style={{ textDecoration: 'none', color: 'white' }}>
            <button style={{ marginLeft: '10px', padding: '10px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px' }}>Create Blog</button>
          </Link>
        </header>
        <Routes>
          <Route path='/' exact element={<BlogList/>}></Route>
           <Route path='/create' element={<CreateBlog />}></Route>
           <Route path='/details/:id' element={<BlogDetails />}></Route>
            <Route path="/update/:id" element={<UpdateBlog />} />

        </Routes>
       </Router>
    
    </>
  )
}

export default App
