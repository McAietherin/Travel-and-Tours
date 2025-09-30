import React from 'react'

function Footer() {
  class IframeErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
      return { hasError: true };
    }
    render() {
      if (this.state.hasError) {
        return <p>Map failed to load. Please try again later.</p>;
      }
      return this.props.children;
    }
  }

  return (
    <footer>
      <div id="triangles">
        <img src="/triangles.png" alt="banner" />
      </div>
      <div id="restfooter">
        <div id="contact">
          <div>
            <h3>Contact us for your journey</h3>
            <p>Reach out to Tournow for any travel queries or tour arrangements in Kathmandu.</p>
          </div>
          <form>
            <div className="texinp">
              <p>Name</p>
              <input type="text" required className='inp' />
            </div>
            <div className="texinp">
              <p>Email</p>
              <input type="email" required className='inp' />
            </div>
            <div id='exception' className="textinp">
              <p>Message</p>
              <textarea required></textarea>
            </div>
            <input type="submit" id='submit' value='Send inquiry' />
          </form>
        </div>
        <IframeErrorBoundary>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76042.42063166482!2d85.33821642355521!3d27.660729116780466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1759238911659!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </IframeErrorBoundary>
        <div id="overlayer">
          <h3>Location</h3>
          <p>Kathmandu, Bagmati Province, Nepal</p>
        </div>
        <div id="foot">
          <div id="logo2">
            <img src={'/logo2.png'} alt="logo" />
          </div>
          <p>&copy; 2025 TourNow. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
