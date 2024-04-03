import React from "react";
import "../css/tailwind.css";

const AboutInfo = () => {
  return (
    <div className="about_us_section">
      <div className="container">
        <div className="two-columns aboutInfo-section">
          <div className="about-content-columns about_project">
            <div className="about-content">
              <h1 class="text-blue-600">
                Designing Brilliance, Developing Futures, Delivering Excellence
              </h1>
              <p>
                At Brandclever, we're not just predicting the future; we're actively crafting it with a team of over 250+ pioneers dedicated to digital excellence. Our expertise in technology and relentless innovation come together to deliver not just IT solutions but industry-defining benchmarks. With a passion for unparalleled quality, we offer more than just services—we provide transformative partnerships that propel businesses to lead and excel. Our ambition is to surpass your expectations, fostering growth and efficiency with each groundbreaking strategy, and securing your place at the forefront of the digital landscape. Choose Brandclever, where every IT challenge is met with an innovative solution and every business milestone is an opportunity for legendary growth.
              </p>
            </div>
          </div>
          {/* <div className='about-img-columns'>
                    <div className='image-sec'>
                    <div className='experience_crown'>    
                           <img src={imgAbout[1]} alt='' />
                            <h4>5+</h4>
                            <p>Years of Experience</p>
                        </div>
                        <img src={imgAbout[0]} alt='' />  
                    </div>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
