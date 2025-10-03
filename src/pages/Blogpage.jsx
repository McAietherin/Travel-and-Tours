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
        <div style={{ padding: "2rem" }}>
            <h1>Blog Post {id}</h1>
            <p>This is the content for blog post with ID: {id}</p>
        </div>
    )
}

export default Blogpage
