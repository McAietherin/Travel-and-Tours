import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight - 1420,
      behavior: "smooth",
    })
  }
  const images = [
    "https://images.unsplash.com/photo-1723585647684-4bbcafc8303f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1694503951011-85e1a64be974?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516477485464-abbcea8f9b1f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602102488252-c4c3daadf1c2?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1548588627-f978862b85e1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  return (
    <>
      <section id='aban' className='back'>
        <img src="https://images.unsplash.com/photo-1540883214770-08e60a9bfd97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
        <div className='jumper'><h1>About us</h1></div>
      </section>
      <section className='darker back'>
        <div className="doubler jumper">
          <div className="dovtext">
            <h2>Feel the life in Nepal with Tournow</h2>
            <p>Welcome to Tournow, your reliable travel partner in Kathmandu. We specialize in creating memorable travel experiences for our clients. Our team of expert travel consultants is dedicated to helping you explore the rich culture and breathtaking landscapes of Nepal.
            </p><p>
              At Tournow, we offer a range of services designed to meet your travel needs. Whether you are looking for cultural tours, adventure trips, or peaceful escapes, we have something for everyone. Let us help you discover the wonders of Nepal with ease and comfort.
            </p>
          </div>
          <div className="dovimg">
            <img src="https://images.unsplash.com/photo-1718179634911-8551f8b0cccf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="largeimage" />
          </div>
        </div>
      </section>
      <div className="centtext jumper">
        <h2>Our mission</h2>
        <p>Connect you to authentic Nepali adventures with unforgettable experiences.</p>
      </div>
      <section className="darker">
        <div className="justex jumper">Explore the unparalleled beauty of Kathmandu and beyond with Tournow. Discover tailored travel experiences that immerse you in local culture, breathtaking landscapes, and unforgettable adventures. Whether you're seeking a serene retreat or an exhilarating journey, our expert team ensures every detail is crafted to perfection, making your visit truly remarkable.</div>
        <section id='blackslider'><Slider {...settings}>
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
        </Slider></section>
        <div className='threehold'>
          <h2 className='jumper'>Guided by local wisdom</h2>
          <div className="three">
            <div className="threecont jumper b">
              <div className='threeimg'><img src="https://images.unsplash.com/photo-1599751229070-854ae5c90869?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" /></div>
              <div>
                <h3>Authenticity</h3>
                <p>We believe in providing genuine and immersive travel experiences that reflect the true essence of Nepal. Our tours are designed to connect you with the local culture, traditions, and landscapes, ensuring every journey is as authentic as it is memorable.</p>
              </div>
            </div>
            <div className="threecont jumper b">
              <div className='threeimg'><img src="https://images.unsplash.com/photo-1500269062855-0d9c4410af0e?q=80&w=666&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" /></div>
              <div>
                <h3>Sustainability</h3>
                <p>At Tournow, we are committed to promoting sustainable tourism practices. We strive to minimize our environmental impact and support local communities by partnering with eco-friendly accommodations and services that prioritize the well-being of our planet.</p>
              </div>
            </div>
            <div className="threecont jumper b">
              <div className='threeimg'><img src="https://images.unsplash.com/photo-1565770772312-2b43cac7d585?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" /></div>
              <div>
                <h3>Customer-centric</h3>
                <p>Our travelers are at the heart of everything we do. We are dedicated to offering personalized services and flexible itineraries that cater to your unique preferences, ensuring a seamless and enriching travel experience.</p>
              </div>
            </div>
          </div>
          <div className="three">
            <div className="threecont jumper b">
              <div className='threeimg'><img src="https://images.unsplash.com/photo-1583079903715-10d17697cd92?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" /></div>
              <div>
                <h3>Integrity</h3>
                <p>We operate with honesty and transparency in all our dealings. From pricing to tour details, we ensure that our clients have clear and accurate information, fostering trust and long-lasting relationships.</p>
              </div>
            </div>
            <div className="threecont jumper b">
              <div className='threeimg'><img src="https://images.unsplash.com/photo-1614679645089-9710d1752cad?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" /></div>
              <div>
                <h3>Passion</h3>
                <p>Driven by a love for exploration, we aim to inspire and guide you through the breathtaking beauty of Nepal. Our team of experienced guides is passionate about sharing their knowledge and enthusiasm for adventure with every traveler.</p>
              </div>
            </div>
            <div className="threecont jumper b">
              <div className='threeimg'><img src="https://images.unsplash.com/photo-1550850603-645ae3c6c387?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" /></div>
              <div>
                <h3>Excellence</h3>
                <p>We strive to provide the highest quality travel experiences. Our team is dedicated to ensuring every detail is perfect, making your journey unforgettable.</p>
              </div>
            </div>
          </div>
        </div>
      </section >
      <div className="centtext jumper">
        <h2>Explore Nepal's rich heritage</h2>
        <p>Experience the vibrant culture and breathtaking landscapes of Kathmandu. Let us guide you through unforgettable journeys filled with adventure and discovery.</p>
        <div className="button" onClick={scrollToBottom}>Start your journey</div>
      </div>
    </>
  )
}

export default About
