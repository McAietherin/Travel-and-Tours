import React from 'react'
import { useParams } from 'react-router-dom'
import { blogs } from "../assets/Data"

function Blogpage() {
    const { id } = useParams()
    const blog = blogs.find((b) => String(b.id) === id)
    if (!blog) {
        return <h2>Blog not found</h2>
    }
    return (
        <section className='blohs'>
            <div className="spacer"></div>
            <div className='blohg'>
                <h1 className='jumper'>{blog.title}</h1>
                <p className='jumper'><em>{blog.date}</em></p>
                <br />
                {blog.image && (
                    <img
                        className='jumper'
                        src={blog.image}
                        alt={blog.title}
                    />
                )}
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
        </section>
    )
}

export default Blogpage
