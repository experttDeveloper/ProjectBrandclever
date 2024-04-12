import React, { useState } from 'react';
import '../css/portfolio.css';


const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(1);
  const[addClass,setAddClass] = useState(false)

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
            <div className='portfolio_sectio' >
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='costner_page_web' onMouseEnter={()=>setAddClass(true)} onMouseLeave={()=>setAddClass(false)}>

                                <a href='/' >
                                    <div className='card_portfol'>
                                        <img src='https://brandclever.in/images/portfolio/wp/costner_recover.png' />
                                        {/* <div className='page_link_prot'> */}
                                            <h3 href='/' className={addClass ? "port_title":""}>Costner Recovery</h3>
                                        {/* </div> */}
                                    </div>
                                </a>
                            </div>
                        </div>
                       
                    </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Portfolio;