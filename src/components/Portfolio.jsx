import React, { useState } from 'react';
import '../css/portfolio.css';
import { Link } from 'react-router-dom';
import portfolioData from '../data/Portfolio.json'


const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };



  return (
    <>
      <div className='portfolio_main'>
        <div className='container'>
          <div className='portfolio_heading'>
            <h2>Explore Our Recent and Featured Projects</h2>
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
                  {portfolioData.data[0].allDevelopwebsite.map((ele, index) => (
                    <div className='col-md-4' key={index}>
                      <div
                        className={`costner_page_web `}
                        onMouseEnter={() => setHoveredCardIndex(index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}>
                        <Link to={ele.websiteUrl} target="_blank">
                          <div className='card_portfol'>
                            <img src={ele.image} />
                            {/* <div className='page_link_prot'> */}
                            <h3 href='/' className={hoveredCardIndex === index ? "port_title" : ""} key={index}>{ele.title}</h3>
                            {/* </div> */}
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              }

              {
                activeTab === 2 && <div className="tab_panel port_content">
                  {portfolioData.data[2].phpWebsite.map((ele, index) => (
                    <div className='col-md-4' key={index}>
                      <div
                        className={`costner_page_web `}
                        onMouseEnter={() => setHoveredCardIndex(index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}>
                        <Link to={ele.websiteUrl} target="_blank">
                          <div className='card_portfol'>
                            <img src={ele.image} />
                            {/* <div className='page_link_prot'> */}
                            <h3 href='/' className={hoveredCardIndex === index ? "port_title" : ""} key={index}>{ele.title}</h3>
                            {/* </div> */}
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              }

              {
                activeTab === 3 && <div className="tab_panel port_content">
                  {portfolioData.data[3].shopifyWebsite.map((ele, index) => (
                    <div className='col-md-4' key={index}>
                      <div
                        className={`costner_page_web `}
                        onMouseEnter={() => setHoveredCardIndex(index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}>
                       <Link to={ele.websiteUrl} target="_blank">
                          <div className='card_portfol'>
                            <img src={ele.image} />
                            {/* <div className='page_link_prot'> */}
                            <h3 href='/' className={hoveredCardIndex === index ? "port_title" : ""} key={index}>{ele.title}</h3>
                            {/* </div> */}
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              }

              {
                activeTab === 4 && <div className="tab_panel port_content">
                  {portfolioData.data[1].wordpessWebsite.map((ele, index) => (
                    <div className='col-md-4' key={index}>
                      <div
                        className={`costner_page_web `}
                        onMouseEnter={() => setHoveredCardIndex(index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}>
                       <Link to={ele.websiteUrl} target="_blank">
                          <div className='card_portfol'>
                            <img src={ele.image} />
                            {/* <div className='page_link_prot'> */}
                            <h3 href='/' className={hoveredCardIndex === index ? "port_title" : ""} key={index}>{ele.title}</h3>
                            {/* </div> */}
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              }

              {
                activeTab === 5 && <div className="tab_panel port_content">
                  {portfolioData.data[4].magentoWebsite.map((ele, index) => (
                    <div className='col-md-4' key={index}>
                      <div
                        className={`costner_page_web `}
                        onMouseEnter={() => setHoveredCardIndex(index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}>
                       <Link to={ele.websiteUrl} target="_blank">
                          <div className='card_portfol'>
                            <img src={ele.image} />
                            {/* <div className='page_link_prot'> */}
                            <h3 href='/' className={hoveredCardIndex === index ? "port_title" : ""} key={index}>{ele.title}</h3>
                            {/* </div> */}
                          </div>
                        </Link>
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