import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogs } from "../assets/Data"

function Blog() {
  const [searchTerm, setSearchTerm] = useState("")
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  useEffect(() => {
    const jumpers = document.querySelectorAll('.jumper')
    jumpers.forEach(el => {
      el.classList.remove('animate')
      void el.offsetWidth
      el.classList.add('animate')
    })
  }, [filteredBlogs])
  return (
    <>
      <div id="sear">
        <h2 className='jumper'>Blog</h2>
        <input type="text" placeholder='Search' value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div id="blog">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <div key={blog.id} className="blogitem jumper">
              <Link to={`/blog/${blog.id}`}>
                <div className="blogimg">
                  <img
                    src={blog.image}
                    alt={blog.title}
                  />
                </div>
              </Link>
              <h3>{blog.title}</h3>
              <p>{blog.date}</p>
            </div>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </>
  )
}

export default Blog
