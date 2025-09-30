import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Blog from './pages/Blog'
import Tours from './pages/Tours'
import Team from './pages/Team'

function Body() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/team' element={<Team />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Body
