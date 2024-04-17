import React, { useState } from 'react';
import '../css/portfolio.css';
import { Link } from 'react-router-dom';


const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [addClass, setAddClass] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const allDevelopwebsite = [
    {
      id: "1",
      image: process.env.PUBLIC_URL + '/images/portfolio/wordpress/all_member.png',
      title: "connect with travelers",
      websiteUrl: "https://myvisiticelandsocial.webdev.is/members/",
    }, {
      id: "2",
      image: process.env.PUBLIC_URL + '/images/portfolio/wordpress/karla.png',
      title: "karla tomanelli photography",
      websiteUrl: "https://karlatomanelli.com/",
    }, {
      id: "3",
      image: process.env.PUBLIC_URL + '/images/portfolio/php/little_wonder.png',
      title: "Little Wonders Montessori",
      websiteUrl: "https://www.lwm.qld.edu.au/",
    }, {
      id: "4",
      image: process.env.PUBLIC_URL + '/images/portfolio/php/super_solar.png',
      title: "super solar system",
      websiteUrl: "https://super-solar-systems.com/",
    }, {
      id: "5",
      image: process.env.PUBLIC_URL + '/images/portfolio/shopify/selis.png',
      title: "selis &co interior design",
      websiteUrl: "https://selisco.com/",
    }, {
      id: "6",
      image: process.env.PUBLIC_URL + '/images/portfolio/magento/comercial.png',
      title: "comercial dantas",
      websiteUrl: "https://www.comercialdantas.com.br/",
    },
   
  ];

  const wordpessWebsite = [
    {
      id: "1",
      image: process.env.PUBLIC_URL + '/images/portfolio/wordpress/all_member.png',
      title: "connect with travelers",
      websiteUrl: "https://myvisiticelandsocial.webdev.is/members/",
    }, {
      id: "2",
      image: process.env.PUBLIC_URL + '/images/portfolio/wordpress/little_wonder.png',
      title: "Little Wonders Montessori",
      websiteUrl: "https://www.lwm.qld.edu.au/",
    }, {
      id: "3",
      image: process.env.PUBLIC_URL + '/images/portfolio/wordpress/karla.png',
      title: "karla tomanelli photography",
      websiteUrl: "https://karlatomanelli.com/",
    }, {
      id: "4",
      image: process.env.PUBLIC_URL + '/images/portfolio/wordpress/mynt.png',
      title: "MYNT Financial",
      websiteUrl: "https://myntfinancial.com.au/",
    }, {
      id: "5",
      image: process.env.PUBLIC_URL + '/images/portfolio/wordpress/super_solar.png',
      title: "super solar system",
      websiteUrl: "https://super-solar-systems.com/",
    }, {
      id: "6",
      image: process.env.PUBLIC_URL + '/images/portfolio/wordpress/mamas_market.png',
      title: "mama's marketplace",
      websiteUrl: "https://mamasmarketplace.com.au/",
    },
  ];

  const phpWebsite = [
    {
      id: "1",
      image: process.env.PUBLIC_URL + '/images/portfolio/php/little_wonder.png',
      title: "Little Wonders Montessori",
      websiteUrl: "https://www.lwm.qld.edu.au/",
    }, {
      id: "2",
      image: process.env.PUBLIC_URL + '/images/portfolio/php/super_solar.png',
      title: "super solar system",
      websiteUrl: "https://super-solar-systems.com/",
    }, {
      id: "3",
      image: process.env.PUBLIC_URL + '/images/portfolio/php/all_member.png',
      title: "connect with travelers",
      websiteUrl: "https://myvisiticelandsocial.webdev.is/members/",
    }, {
      id: "4",
      image: process.env.PUBLIC_URL + '/images/portfolio/php/mamas_market.png',
      title: "mama's marketplace",
      websiteUrl: "https://mamasmarketplace.com.au/",
    }, {
      id: "5",
      image: process.env.PUBLIC_URL + '/images/portfolio/php/poclonsic.png',
      title: "pokloncic",
      websiteUrl: "https://pokloncic.pro/",
    },
  ];

  const shopifyWebsite = [
    {
      id: "1",
      image: process.env.PUBLIC_URL + '/images/portfolio/shopify/extee.png',
      title: "Stylish summer shirts",
      websiteUrl: "https://extee.com.au/",
    }, {
      id: "2",
      image: process.env.PUBLIC_URL + '/images/portfolio/shopify/fohen.png',
      title: "E-commerce",
      websiteUrl: "https://fohen.co.uk/",
    }, {
      id: "3",
      image: process.env.PUBLIC_URL + '/images/portfolio/shopify/naya.png',
      title: "spring release",
      websiteUrl: "https://myahookah.com/",
    }, {
      id: "4",
      image: process.env.PUBLIC_URL + '/images/portfolio/shopify/selis.png',
      title: "Selis &co interior design",
      websiteUrl: "https://selisco.com/",
    },
    , {
      id: "5",
      image: process.env.PUBLIC_URL + '/images/portfolio/shopify/hyfa.png',
      title: "New Arrivals",
      websiteUrl: "https://heyfancystyle.com/",
    },
  ];

  const magentoWebsite = [
    {
      id: "1",
      image: process.env.PUBLIC_URL + '/images/portfolio/magento/comercial.png',
      title: "comercial dantas",
      websiteUrl: "https://www.comercialdantas.com.br/",
    }, {
      id: "2",
      image: process.env.PUBLIC_URL + '/images/portfolio/magento/smart_sign.png',
      title: "E-commerce ksmart sign",
      websiteUrl: "https://www.ksmartsign.co.uk/",
    },
  ];

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
                  {allDevelopwebsite.map((ele, index) => (
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
                  {phpWebsite.map((ele, index) => (
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
                  {shopifyWebsite.map((ele, index) => (
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
                  {wordpessWebsite.map((ele, index) => (
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
                  {magentoWebsite.map((ele, index) => (
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