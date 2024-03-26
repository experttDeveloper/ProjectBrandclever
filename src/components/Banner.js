// Banner.js

import React, { useState } from 'react';
import '../Banner.css';
// import banner_bg from '../Images/job-5.jpg';

const Banner = () => {

  const [isHover, setIsHover] = useState(false)

  return (
    <div className="banner brand_banner_section">
      {/* Background video */}
      <video autoPlay muted loop className="banner-video">
        <source src={process.env.PUBLIC_URL + '/video/banner_bg.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>​​Meet the Digital Drivers of Global Disruptors</h1>
        <p>We catalyze business growth by reimagining digital experiences that
          conquer complex challenges through innovation and agility.</p>
        <div className='exp_btn'>
          <a href='#'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            
          >Consult Our Experts <i  className={isHover ? "consult_hover fa fa-chevron-right" : "fa fa-chevron-right"} aria-hidden="true"></i>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Banner;