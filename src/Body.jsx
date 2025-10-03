import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Blog from './pages/Blog'
import Team from './pages/Team'
import Blogpage from './pages/Blogpage'
import Teampage from './pages/Teampage'

function Body() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<Blogpage />} />
        <Route path='/team' element={<Team />} />
        <Route path='/team/:tid' element={<Teampage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Body
