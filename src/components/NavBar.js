import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/logoWhite.png';

const serviceMenus = [
  {
    id: 1,
    icon: 'images/service/website_design.png',
    title: "Website Designing",
    url: "/website-design"
  },
  {
    id: 2,
    icon: 'images/service/website_develop.png',
    title: "Web Development",
    url: "/web-development"
  },
  {
    id: 3,
    icon: 'images/service/graphic_design.png',
    title: "Graphic Design",
    url: "/graphic-degin"
  },
  {
    id: 4,
    icon: 'images/service/mern_stack.png',
    title: "Mern Stack",
    url: "/mern-stack"
  },
  {
    id: 5,
    icon: 'images/service/content_strategy.png',
    title: "Content Strategy",
    url: "/content-strategy"
  },
  {
    id: 6,
    icon: 'images/service/framework.png',
    title: "Framework",
    url: "/framework"
  },
  {
    id: 7,
    icon: 'images/service/cms_solution.png',
    title: "CMS Solutions",
    url: "/cms-solution"
  },
  {
    id: 8,
    icon: 'images/service/landing_page.png',
    title: "Landing Page",
    url: "/landing-page"
  },
  {
    id: 9,
    icon: 'images/service/ecommerce.png',
    title: "E-Commerce",
    url: "/ecommerce"
  },
  {
    id: 10,
    icon: 'images/service/digital_marketing.png',
    title: "Digital Marketing",
    url: "/digital-marketing"
  },
  {
    id: 11,
    icon: 'images/service/web_application.png',
    title: "Web Application Development",
    url: "/web-application"
  },
  {
    id: 12,
    icon: 'images/service/software_testing.png',
    title: "Software Testing",
    url: "/software-testing"
  }

]

const hireMenus = [
  {
    id: 1,
    icon: 'images/service/website_design.png',
    title: "Hire Shopify Expert",
    url: "/hire-shopify-expert"
  },
  {
    id: 2,
    icon: 'images/service/website_develop.png',
    title: "Hire Magento Expert",
    url: "/hire-magento-expert"
  },
  {
    id: 3,
    icon: 'images/service/graphic_design.png',
    title: "Hire Webflow Expert",
    url: "/hire-webflow-expert"
  },
  {
    id: 4,
    icon: 'images/service/mern_stack.png',
    title: "Hire Wix Expert",
    url: "/hire-wix-expert"
  },
  {
    id: 5,
    icon: 'images/service/content_strategy.png',
    title: "Hire Woo Expert",
    url: "/hire-woo-expert"
  },
  {
    id: 6,
    icon: 'images/service/framework.png',
    title: "Hire Wordpress Expert",
    url: "/hire-wordpress-expert"
  },
  {
    id: 7,
    icon: 'images/service/cms_solution.png',
    title: "Hire BigCommerce Expert",
    url: "/hire-bigcommerce-expert"
  },
  {
    id: 8,
    icon: 'images/service/landing_page.png',
    title: "Hire Sqaurespace Expert",
    url: "/hire-suqarespace-expert"
  },
  {
    id: 9,
    icon: 'images/service/ecommerce.png',
    title: "Hire Laravel Developer",
    url: "/hire-laravel-developer"
  },
  {
    id: 10,
    icon: 'images/service/digital_marketing.png',
    title: "Hire ReactJS Developer",
    url: "/hire-reactjs-developer"
  },
  {
    id: 11,
    icon: 'images/service/web_application.png',
    title: "Hire Tailwind CSS Developer",
    url: "/hire-tailwind-css-developer"
  },

]

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isSticky ? 'sticky' : ''}>
        <div className='inner-header'>
          <div className='container'>
            <div className='inner_header_nav'>
              <div className="logo">
                <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
              </div>
              <div className={`menu-toggle ${isMenuOpen ? 'openMenus' : 'closeMenus'}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                <div className='closeIcon'><i className="fa fa-close"></i></div>
              </div>
              <nav className={isMenuOpen ? 'open' : 'closeToggal'}>
                <ul>

                  <li>
                    <div className="dropdownMenu">
                      <Link to="/service" onClick={closeMenu} className="dropbtn">Services
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                      </Link>
                      <div className="dropdown-content">

                        <div className="row">
                          <div className="col-md-3 serv_cns">
                            {serviceMenus.slice(0, 6).map((ele, key) => {
                              return (
                                <div className='service_img'>
                                  <img src={ele.icon} height="30px" width="30px" />
                                  <Link to={ele.url}>{ele.title}</Link>
                                </div>
                              )
                            })}
                          </div>
                          <div className="col-md-3 serv_cns">
                            {
                              serviceMenus.slice(6, 12).map((ele, key) => {
                                return (
                                  <div className='service_img'>
                                    <img src={ele.icon} height="30px" width="30px" />
                                    <Link to={ele.url}>{ele.title}</Link>
                                  </div>
                                )
                              })
                            }
                          </div>
                          <div className="col-md-6 serv_img">
                            <img src={process.env.PUBLIC_URL + '/images/menus/ser_new_img.png'} alt='' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdownMenu">
                      <Link to="/service" onClick={closeMenu} className="dropbtn">Hire a Developer
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                      </Link>
                      <div className="dropdown-content">

                        <div className="row">
                          <div className="col-md-3 serv_cns">
                            {hireMenus.slice(0, 6).map((ele, key) => {
                              return (
                                <div className='service_img'>
                                  <img src={ele.icon} height="30px" width="30px" />
                                  <Link to={ele.url}>{ele.title}</Link>
                                </div>
                              )
                            })}
                          </div>
                          <div className="col-md-4 serv_cns">
                            {
                              hireMenus.slice(6, 12).map((ele, key) => {
                                return (
                                  <div className='service_img'>
                                    <img src={ele.icon} height="30px" width="30px" />
                                    <Link to={ele.url}>{ele.title}</Link>
                                  </div>
                                )
                              })
                            }
                          </div>
                          <div className="col-md-5 serv_img">
                            <img src={process.env.PUBLIC_URL + '/images/menus/ser_new_img.png'} alt='' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='pages_navbar'>
                    <div className="dropdownMenu">
                      <Link to="/about" onClick={closeMenu}>Pages
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                        <div className="dropdown-content pages">
                          <Link to="/about">About</Link>
                          <Link to="/career">Career</Link>
                          <Link to="/portfolio">Portfolio</Link>
                          <Link to="/privacy-policy">Privacy Policy</Link>
                          <Link to="/privacy-policy">Terms & Conditions</Link>
                        </div>
                      </Link>
                    </div>
                  </li>
                 
                  {/* <li>
                    <Link to="/portfolio" onClick={closeMenu}>Portfolio
                      <span class="arrow-right">
                        <span class="ar_line">
                        </span><span class="ar_left">
                        </span>
                      </span>
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/review" onClick={closeMenu}>Reviews
                      <span class="arrow-right">
                        <span class="ar_line">
                        </span><span class="ar_left">
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li className='hire_us'>
                    <Link to="/hire-us" onClick={closeMenu}>Hire Us
                      <span class="arrow-right">
                        <span class="ar_line">
                        </span><span class="ar_left">
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
                <div className='get_hed_btnn'>
                  <Link to="/contact" className='button_slide slide_down' onClick={closeMenu}>Contact Us</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
