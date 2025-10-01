import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const images = [
    "https://images.unsplash.com/photo-1662390343538-f5225bf3ea89?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1647679147029-508c62f35c33?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1575819719798-83d97dd6949c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1618083840944-31cc42fcf250?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1610997686651-98492fd08108?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
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
  };

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
      <section className="darker">
        <div className='threehold'>
          <h2 className='jumper'>Experience unique tours in Nepal</h2>
          <div className="three">
            <div className="threecont jumper">
              <img src="https://images.unsplash.com/photo-1692170453545-218ae3662f7d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
              <div>
                <h3>Guided cultural touring</h3>
                <p>Experience the rich heritage of Nepal with our expert-led cultural tours.</p>
              </div>
            </div>
            <div className="threecont jumper">
              <img src="https://images.unsplash.com/photo-1732007337770-27dbedb7a8a1?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
              <div>
                <h3>Adventure trekking packages</h3>
                <p>Embark on thrilling treks through the stunning landscapes of Nepal.</p>
              </div>
            </div>
            <div className="threecont jumper">
              <img src="https://images.unsplash.com/photo-1672338127087-d46c9ecd48f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
              <div>
                <h3>Personalised travel itineraries</h3>
                <p>Tailor your journey across Nepal with custom itineraries made just for you.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="doubler jumper">
          <div className="dovtext">
            <h2>Discover Nepal with Tournow</h2>
            <p>Tournow is your gateway to exploring the vibrant cultures and breathtaking landscapes of Kathmandu, nestled in the heart of Bagmati Province, Nepal. Dedicated to crafting unforgettable travel experiences, our platform connects adventurers and culture enthusiasts with a wide array of tours that showcase the rich heritage and stunning scenery of this historic city.
            </p>
            <p>
              Whether you're seeking a serene escape into nature or an immersive dive into local traditions, Tournow offers curated itineraries that cater to all travel styles. Join us and uncover the hidden gems of Kathmandu like never before.
            </p>
          </div>
          <div className="dovimg">
            <img src="https://images.unsplash.com/photo-1585597800810-07a63ea8e983?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="largeimage" />
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
        <h2>Travel packages pricing</h2>
        <div id="offers">
          <div className="offer">
            <div className="ofimg">
              <img src="https://images.unsplash.com/photo-1662563059758-9c7b2c5ad2f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="offer" />
            </div>
            <h4>Basic Nepal tour</h4>
            <div className="price">
              <h2>$100</h2>
              <p>per trip</p>
            </div>
            <div className="info">More info</div>
            <p>Experience the essential attractions of Nepal with our Basic Tour, perfect for first-time visitors.</p>
          </div>
          <div className="offer" id='bigger'>
            <div className="ofimg">
              <img src="https://images.unsplash.com/photo-1662563060416-023750038bce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="offer" />
            </div>
            <div id="pop">Popular</div>
            <h4>Extended Nepal experience</h4>
            <div className="price">
              <h2>$250</h2>
              <p>per trip</p>
            </div>
            <div className="info">More info</div>
            <p>Dive deeper into Nepal's culture and history. Includes all features from the Basic Tour.</p>
          </div>
          <div className="offer">
            <div className="ofimg">
              <img src="https://images.unsplash.com/photo-1617469170169-55626c028519?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="offer" />
            </div>
            <h4>Ultimate Nepal adventure</h4>
            <div className="price">
              <h2>$500</h2>
              <p>per trip</p>
            </div>
            <div className="info">More info</div>
            <p>Discover every hidden gem of Nepal. Includes all features from the Extended Nepal Experience.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
