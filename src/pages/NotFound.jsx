import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    };
  }, [])

  return (
    <section id='bidd'>
      <div id="beige">
        <h1>404</h1>
        <h2>Something unexpected happened</h2>
        <br />
        <Link to={'/'}>Return home</Link>
      </div>
      <br />
    </section>
  )
}

export default NotFound