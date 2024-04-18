// Banner.js

import React, { useEffect, useRef, useState } from 'react';
import '../Banner.css';
// import banner_bg from '../Images/job-5.jpg';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typed from "typed.js";

const Banner = () => {

  const [isHover, setIsHover] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const typed = new Typed(".typing", {
        strings: [
          "Web Development Service",
          "Web Design Service",
          "CMS Solution Service",
          "Graphic Design Service"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        showCursor:true
      });

      return () => {
        typed.destroy();
      };
    }
  }, [mounted]);


  return (
    <div className="banner brand_banner_section banner_img_hi">
      {/* Background video */}
      {/* <video autoPlay muted loop className="banner-video">
        <source src={process.env.PUBLIC_URL + '/video/banner_bg.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className='container'>
        <div className="content">
          <h1>Discover Unmatched <span className="typing" style={{color:"#54a154"}}></span></h1>
          {/* <h1>Discover Unmatched Web Development Service</h1> */}
          <p>Brandclever emerges as a top-tier IT force, delivering smart and proven solutions across the tech spectrum. With our extensive expertise and experience, we're quickly becoming the leader in providing innovative software services for every domain.</p>
          <div className='exp_btn'>
            <a href='#'
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}

            >Consult Our Experts <span className='icon_span'><NavigateNextIcon className={isHover ? "consult_hover " : ""} /> </span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;