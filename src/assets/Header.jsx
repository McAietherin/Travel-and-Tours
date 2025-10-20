import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastThreshold(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navId = !isHome || scrolledPastThreshold ? 'defnav' : 'homenav'

  const [isOpen, setIsOpen] = useState(false)
  const mobileRef = useRef(null)
  const dropperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileRef.current &&
        !mobileRef.current.contains(event.target) &&
        dropperRef.current &&
        !dropperRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  return (
    <>
      <nav id={navId}>
        <div>
          <Link to={'/'}>
            <div id="logo">
              <img src={'/logo3.png'} alt="logo" />
            </div>
          </Link>
          <ul id='navver'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about-us'}>About us</Link></li>
            <li><Link to={'/team'}>Our team</Link></li>
            <li><Link to={'/blog'}>Blogs</Link></li>
          </ul>

          <div id="dropper" ref={dropperRef} onClick={() => setIsOpen(!isOpen)}>
            <i className="bi bi-list"></i>
          </div>
        </div>
      </nav>
      <div id="mobile" ref={mobileRef}
        style={{
          top: isOpen ? '0px' : '-100%'
        }}
      >
        <ul>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/about-us'}><li>About us</li></Link>
          <Link to={'/team'}><li>Team</li></Link>
          <Link to={'/blog'}><li>Blog</li></Link>
        </ul>
      </div>
    </>
  )
}

export default Header
