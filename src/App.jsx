import React, { useEffect } from 'react'
import Header from './assets/Header'
import Body from './Body'
import Footer from './assets/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          obs.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.2,
      rootMargin: "0px 0px -40% 0px"
    })

    const jumpers = document.querySelectorAll('.jumper')
    jumpers.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
  return (
    <>
      <Header />
      <div className="spacer"></div>
      <Body />
      <Footer />
    </>
  )
}

export default App
