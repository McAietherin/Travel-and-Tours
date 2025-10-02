import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from '../assets/PrevArrow';
import NextArrow from '../assets/NextArrow';

function Home() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight -1420,
      behavior: "smooth",
    })
  }
  const images2 = [
    "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum-768x360.png",
    "https://kitpro.site/transvice/wp-content/uploads/sites/66/2022/01/logoipsum-logo-50-1.png",
    "https://i1.wp.com/tecuniversitario.net/wp-content/uploads/2020/07/logoipsum.png?ssl=1",
    "https://kitpro.site/transvice/wp-content/uploads/sites/66/2022/01/logoipsum-logo-52-1.png",
    "https://wpblockslider.com/wp-content/uploads/2022/02/logoipsum-logo-10-1024x264.png",
  ]

  const duplicatedImages = [...images2, ...images2]

  const images = [
    "https://images.unsplash.com/photo-1662390343538-f5225bf3ea89?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1647679147029-508c62f35c33?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1575819719798-83d97dd6949c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1618083840944-31cc42fcf250?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1610997686651-98492fd08108?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15%",
    autoplay: true,
    autoplaySpeed: 5000,
  }

  const slides = [
    { title: "Discovering Kathmandu was a breeze with Tournow! Their site offered great tour options, and booking was seamless. The attention to detail and local insights made my trip memorable. I’ll definitely use them again for future adventures in Nepal!", description: "- Sanjay Thapa" },
    { title: "Tournow made my trip to Kathmandu unforgettable! The user-friendly website helped me find the perfect tour, and their customer service was exceptional. I highly recommend them for anyone looking to explore Nepal with ease and confidence.", description: "- Aryan Sharma" },
    { title: "Tournow's website made planning my Kathmandu adventure a joy! Their curated tours and hassle-free booking process ensured a fantastic experience. From breathtaking sights to cultural insights, Tournow covered it all. Highly recommend for anyone eager to explore Nepal!", description: "- Priya Karki" },
  ]

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
  return (
    <>
      <section id='banner'>
        <img src="https://images.unsplash.com/photo-1553886334-43d24f24d3bd?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
        <div id="bannerover" className='jumper'>
          <h1>Discover majestic Nepal today</h1>
          <p>Explore the wonders of Nepal with Tournow - your gateway to unforgettable cultural and historical adventures in Nepal.</p>
          <Link to={'/tours'}><div className="button" onClick={() => console.log('clicked')}>Explore Nepal now</div></Link>
        </div>
      </section>
      <div className="slider">
        <div className="slide-track">
          {duplicatedImages.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`slide-${index}`} />
            </div>
          ))}
        </div>
      </div>
      <section className="darker">
        <div className='threehold'>
          <h2 className='jumper'>Experience unique tours in Nepal</h2>
          <div className="three">
            <div className="threecont jumper">
              <img src="https://images.unsplash.com/photo-1699204121879-f7d805d3bc41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
              <div>
                <h3>Guided cultural touring</h3>
                <p>Experience the rich heritage of Nepal with our expert-led cultural tours.</p>
              </div>
            </div>
            <div className="threecont jumper">
              <img src="https://images.unsplash.com/photo-1685426351030-7405d754809f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
              <div>
                <h3>Adventure trekking packages</h3>
                <p>Embark on thrilling treks through the stunning landscapes of Nepal.</p>
              </div>
            </div>
            <div className="threecont jumper">
              <img src="https://images.unsplash.com/photo-1562135291-0f32de39d6fc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
              <div>
                <h3>Personalised travel itineraries</h3>
                <p>Tailor your journey across Nepal with custom itineraries made just for you.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="doubler jumper">
          <div className="dovimg">
            <img src="https://images.unsplash.com/photo-1585597800810-07a63ea8e983?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="largeimage" />
          </div>
          <div className="dovtext">
            <h2>Discover Nepal with Tournow</h2>
            <p>Tournow is your gateway to exploring the vibrant cultures and breathtaking landscapes of Kathmandu, nestled in the heart of Bagmati Province, Nepal. Dedicated to crafting unforgettable travel experiences, our platform connects adventurers and culture enthusiasts with a wide array of tours that showcase the rich heritage and stunning scenery of this historic city.
            </p>
            <p>
              Whether you're seeking a serene escape into nature or an immersive dive into local traditions, Tournow offers curated itineraries that cater to all travel styles. Join us and uncover the hidden gems of Kathmandu like never before.
            </p>
            <div className="button" onClick={scrollToBottom}>Contact</div>
          </div>
        </div>
      </section>
      <div id="bottr"></div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide-wrapper">
            <div className="slide-inner">
              <img
                src={img}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  height: "37vw",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
      <section id='prices'>
        <h2 className='jumper'>Travel packages pricing</h2>
        <div id="offers">
          <div className="offer jumper">
            <div className="ofimg" style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1662563059758-9c7b2c5ad2f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
            }}>
            </div>
            <h4>Basic Nepal tour</h4>
            <div className="price">
              <h2>$100</h2>
              <p>per trip</p>
            </div>
            <div className="info">More info</div>
            <p>Experience the essential attractions of Nepal with our Basic Tour, perfect for first-time visitors.</p>
            <ul>
              <li><i className="bi bi-check2"></i><p>3 days</p></li>
              <li><i className="bi bi-check2"></i><p>Hotel stay</p></li>
              <li><i className="bi bi-check2"></i><p>Guided tour</p></li>
            </ul>
          </div>
          <div className="offer jumper" id='bigger'>
            <div className="ofimg" style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1706188540639-d2ad13995266?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
            }}>
            </div>
            <div id="pop">Popular</div>
            <h4>Extended Nepal experience</h4>
            <div className="price">
              <h2>$250</h2>
              <p>per trip</p>
            </div>
            <div className="info">More info</div>
            <p>Dive deeper into Nepal's culture and history. Includes all features from the Basic Tour.</p>
            <ul>
              <li><i className="bi bi-check2"></i><p>5 days</p></li>
              <li><i className="bi bi-check2"></i><p>Temple visits</p></li>
              <li><i className="bi bi-check2"></i><p>Cultural show</p></li>
            </ul>
          </div>
          <div className="offer jumper">
            <div className="ofimg" style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1617469170169-55626c028519?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
            }}>
            </div>
            <h4>Ultimate Nepal adventure</h4>
            <div className="price">
              <h2>$500</h2>
              <p>per trip</p>
            </div>
            <div className="info">More info</div>
            <p>Discover every hidden gem of Nepal. Includes all features from the Extended Nepal Experience.</p>
            <ul>
              <li><i className="bi bi-check2"></i><p>7 days</p></li>
              <li><i className="bi bi-check2"></i><p>Local cuisine</p></li>
              <li><i className="bi bi-check2"></i><p>Private guide</p></li>
            </ul>
          </div>
        </div>
      </section>
      <section className='textslider jumper'>
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

export default Home
