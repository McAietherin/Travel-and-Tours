import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    const jumpers = document.querySelectorAll('.jumper')
    jumpers.forEach(el => {
      el.classList.remove('animate')
    })
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0,
      rootMargin: "0px 0px -40% 0px"
    })
    jumpers.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
