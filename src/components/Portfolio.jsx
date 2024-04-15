import React, { useState } from 'react';
import '../css/portfolio.css';


const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [addClass, setAddClass] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const allImg = [
    process.env.PUBLIC_URL + '/images/portfolio/jumpsport.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/costner_recover.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/mamasmarketplace-au-mamasmarketplace.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/pt-businessacademy-si.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/super-solar-systems.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/studioblup.png',
  ];

  const wordpressImg = [
    process.env.PUBLIC_URL + '/images/portfolio/wp/costner_recover.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/mamasmarketplace-au-mamasmarketplace.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/pt-businessacademy-si.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/super-solar-systems.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/studioblup.png',
  ];

  const phpImg = [
    process.env.PUBLIC_URL + '/images/portfolio/php/CRM-Project.png',
    process.env.PUBLIC_URL + '/images/portfolio/php/lucy-exp.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/super-solar-systems.png',
  ];

  const shopifyImg = [
    process.env.PUBLIC_URL + '/images/portfolio/shopify/1.png',
    process.env.PUBLIC_URL + '/images/portfolio/shopify/2.png',
    process.env.PUBLIC_URL + '/images/portfolio/shopify/3.png',
  ];

  return (
    <>
      <div className='portfolio_main'>
        <div className='container'>
          <div className='portfolio_heading'>
            <p className='litle-dess'>OUR RECENT PROJECT</p>
            <h2>Take a look at the recent and featured projects that we have completed</h2>
          </div>

          <ul className="tabs">
            <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>All</li>
            <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>PHP</li>
            <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>Shopify</li>
            <li className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabClick(4)}>WordPress</li>
            <li className={activeTab === 5 ? 'active' : ''} onClick={() => handleTabClick(5)}>Magento </li>
          </ul>

          <div className='portfolio_sectio' >
            <div className='row'>
              {
                activeTab === 1 && <div className="tab_panel port_content">
                  {allImg.map((image, index) => (
                    <div className='col-md-4' key={index}>
                      <div
                        className={`costner_page_web ${hoveredCardIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredCardIndex(index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}>
                        <a href='/' >
                          <div className='card_portfol'>
                            <img src={image} />
                            {/* <div className='page_link_prot'> */}
                            <h3 href='/' className="port_title" key={index}>Costner Recovery</h3>
                            {/* </div> */}
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              }

              {
                activeTab === 2 && <div className="tab_panel port_content">
                  {phpImg.map((image, index) => (
                    <div className='col-md-4' key={index}>
                      <div
                        className={`costner_page_web ${hoveredCardIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredCardIndex(index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}>
                        <a href='/' >
                          <div className='card_portfol'>
                            <img src={image} />
                            {/* <div className='page_link_prot'> */}
                            <h3 href='/' className="port_title" key={index}>Costner Recovery</h3>
                            {/* </div> */}
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              }

              {
                activeTab === 3 && <div className="tab_panel port_content">
                  {shopifyImg.map((image, index) => (
                    <div className='col-md-4' key={index}>
                      <div
                        className={`costner_page_web ${hoveredCardIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredCardIndex(index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}>
                        <a href='/' >
                          <div className='card_portfol'>
                            <img src={image} />
                            {/* <div className='page_link_prot'> */}
                            <h3 href='/' className="port_title" key={index}>Costner Recovery</h3>
                            {/* </div> */}
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              }

              {
                activeTab === 4 && <div className="tab_panel port_content">
                  {wordpressImg.map((image, index) => (
                    <div className='col-md-4' key={index}>
                      <div
                        className={`costner_page_web ${hoveredCardIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredCardIndex(index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}>
                        <a href='/' >
                          <div className='card_portfol'>
                            <img src={image} />
                            {/* <div className='page_link_prot'> */}
                            <h3 href='/' className="port_title" key={index}>Costner Recovery</h3>
                            {/* </div> */}
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              }

              {
                activeTab === 5 && <div className="tab_panel port_content">
                  {phpImg.map((image, index) => (
                    <div className='col-md-4' key={index}>
                      <div
                        className={`costner_page_web ${hoveredCardIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredCardIndex(index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}>
                        <a href='/' >
                          <div className='card_portfol'>
                            <img src={image} />
                            {/* <div className='page_link_prot'> */}
                            <h3 href='/' className="port_title" key={index}>Costner Recovery</h3>
                            {/* </div> */}
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;