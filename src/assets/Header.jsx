import React, { useEffect, useState } from 'react'
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


  return (
    <nav id={navId}>
      <div>
        <div id="logo">
          <img src={navId === 'defnav' ? '/logo3.png' : '/logo1.png'} alt="logo" />
        </div>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about-us'}>About us</Link></li>
          <li><Link to={'/team'}>Team</Link></li>
          <li><Link to={'/tours'}>Tours</Link></li>
          <li><Link to={'/blog'}>Blog</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
