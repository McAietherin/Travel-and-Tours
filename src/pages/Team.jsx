import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PrevArrow from '../assets/PrevArrow'
import NextArrow from '../assets/NextArrow'
import { team } from "../assets/Data"
import { Link } from 'react-router-dom'

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
            {team.map((member) => (
              <div key={member.tid} className="jumper">
                <div className="tsmimg">
                  <Link to={`/team/${member.tid}`}>
                    <img src={member.image} alt={member.name} />
                  </Link>
                </div>
                <h3>{member.name}</h3>
              </div>
            ))}
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

