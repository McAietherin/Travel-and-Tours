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

  return (
    <>
      <nav id={navId}>
        <div>
          <div id="logo">
            <img src={navId === 'defnav' ? '/logo3.png' : '/logo1.png'} alt="logo" />
          </div>
          <ul id='navver'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about-us'}>About us</Link></li>
            <li><Link to={'/team'}>Team</Link></li>
            <li><Link to={'/tours'}>Tours</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
          </ul>

          <div id="dropper" ref={dropperRef} onClick={() => setIsOpen(!isOpen)}>
            <i className="bi bi-list"></i>
          </div>
        </div>
      </nav>
      <div id="mobile" ref={mobileRef}
        style={{
          top: isOpen ? '70px' : '-100%'
        }}
      >
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about-us'}>About us</Link></li>
          <li><Link to={'/team'}>Team</Link></li>
          <li><Link to={'/tours'}>Tours</Link></li>
          <li><Link to={'/blog'}>Blog</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header
