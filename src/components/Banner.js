// Banner.js

import React, { useState } from 'react';
import '../Banner.css';
// import banner_bg from '../Images/job-5.jpg';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Banner = () => {

  const [isHover, setIsHover] = useState(false)

  return (
    <div className="banner brand_banner_section banner_img_hi">
      {/* Background video */}
      {/* <video autoPlay muted loop className="banner-video">
        <source src={process.env.PUBLIC_URL + '/video/banner_bg.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="content">
        <h1>​​Meet the Digital Drivers of Global Disruptors</h1>
        <p>We catalyze business growth by reimagining digital experiences that
          conquer complex challenges through innovation and agility.</p>
        <div className='exp_btn'>
          <a href='#'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}

          >Consult Our Experts <span className='icon_span'><NavigateNextIcon className={isHover ? "consult_hover " : ""} /> </span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Banner;