import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from '../assets/PrevArrow';
import NextArrow from '../assets/NextArrow';

function Team() {
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  const slides = [
    { title: "Discovering Kathmandu was a breeze with Tournow! Their site offered great tour options, and booking was seamless. The attention to detail and local insights made my trip memorable. I’ll definitely use them again for future adventures in Nepal!", description: "- Sanjay Thapa" },
    { title: "Tournow made my trip to Kathmandu unforgettable! The user-friendly website helped me find the perfect tour, and their customer service was exceptional. I highly recommend them for anyone looking to explore Nepal with ease and confidence.", description: "- Aryan Sharma" },
    { title: "Tournow's website made planning my Kathmandu adventure a joy! Their curated tours and hassle-free booking process ensured a fantastic experience. From breathtaking sights to cultural insights, Tournow covered it all. Highly recommend for anyone eager to explore Nepal!", description: "- Priya Karki" },
  ]
  return (
    <>
      <div className="darker back">
        <div id="tesam">
          <h1 className='jumper'>Meet our team</h1>
          <div id="tsmgrid">
            <div className='jumper'>
              <div className="tsmimg">
                <img src="https://images.unsplash.com/photo-1580928891584-0d36b37ae981?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
              </div>
              <h3>John Doe</h3>
            </div>
            <div className='jumper'>
              <div className="tsmimg">
                <img src="https://images.unsplash.com/photo-1681164314348-1cab4b4eb17f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
              </div>
              <h3>Harka Prasad</h3>
            </div>
            <div className='jumper'>
              <div className="tsmimg">
                <img src="https://images.unsplash.com/photo-1729558446316-67ed74b26d0b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
              </div>
              <h3>Juan Carlos</h3>
            </div>
            <div className='jumper'>
              <div className="tsmimg">
                <img src="https://images.unsplash.com/photo-1631470854898-0366b72e39c4?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
              </div>
              <h3>Steve Burns</h3>
            </div>
            <div className='jumper'>
              <div className="tsmimg">
                <img src="https://images.unsplash.com/photo-1721648922835-90855928ba02?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
              </div>
              <h3>Sphinctor Vernes</h3>
            </div>
            <div className='jumper'>
              <div className="tsmimg">
                <img src="https://images.unsplash.com/photo-1724441647621-6fa09c9d5f4c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
              </div>
              <h3>Bire Khadka</h3>
            </div>
            <div className='jumper'>
              <div className="tsmimg">
                <img src="https://images.unsplash.com/photo-1673118306597-b780da8d8d23?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
              </div>
              <h3>Salami Hayek</h3>
            </div>
            <div className='jumper'>
              <div className="tsmimg">
                <img src="https://images.unsplash.com/photo-1565986829033-8afa261d9633?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
              </div>
              <h3>Nicholas Paige</h3>
            </div>
            <div className='jumper'>
              <div className="tsmimg">
                <img src="https://images.unsplash.com/photo-1628250729966-d56f36278d54?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
              </div>
              <h3>Mohammed Raffi</h3>
            </div>
            <div className='jumper'>
              <div className="tsmimg">
                <img src="https://images.unsplash.com/photo-1596385390567-1f97a132e558?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
              </div>
              <h3>Mohan Lal</h3>
            </div>
            <div className='jumper'>
              <div className="tsmimg">
                <img src="https://plus.unsplash.com/premium_photo-1666866587910-2f333c109ef7?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
              </div>
              <h3>Abhinav Shrestha</h3>
            </div>
            <div className='jumper'>
              <div className="tsmimg">
                <img src="https://plus.unsplash.com/premium_photo-1691030254390-aa56b22e6a45?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
              </div>
              <h3>Bikas Panta</h3>
            </div>
          </div>
        </div>
      </div>
      <section className='textslider jumper' id='spa'>
        <Slider {...settings2}>
          {slides.map((slide, index) => (
            <div key={index} style={{ padding: "20px", textAlign: "center", background: "#f5f5f5", borderRadius: "8px" }}>
              <h3>{slide.title}</h3>
              <br />
              <h5>{slide.description}</h5>
            </div>
          ))}
        </Slider>
      </section>
    </>
  )
}

export default Team

